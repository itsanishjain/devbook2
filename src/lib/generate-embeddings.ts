import { createClient } from "@supabase/supabase-js";
import { createHash } from "crypto";
import { loadEnvConfig } from "@next/env";
import OpenAI from "openai";
import { data } from "./automationData";
loadEnvConfig("");

async function generateEmbeddings() {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.SUPABASE_SERVICE_ROLE_KEY ||
    !process.env.OPENAI_API_KEY
  ) {
    return console.log(
      "Environment variables NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, and OPENAI_API_KEY are required: skipping embeddings generation"
    );
  }

  const supabaseClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  console.log(`Processing ${data.length} rules`);

  for (const item of data) {
    const { rule, trigger, action, tags } = item;

    try {
      // Generate a unique identifier for the rule
      const checksum = createHash("sha256")
        .update(rule as string)
        .digest("base64");

      // Check if the rule already exists in the database
      const { data: existingRule, error: fetchRuleError } = await supabaseClient
        .from("rules")
        .select("id, checksum")
        .eq("checksum", checksum)
        .maybeSingle();

      if (fetchRuleError) {
        throw fetchRuleError;
      }

      if (existingRule?.checksum === checksum) {
        console.log(`Rule "${rule}" already exists, skipping...`);
        continue;
      }

      // Generate embedding for the rule
      const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: rule as string,
      });

      if (!embeddingResponse.data || embeddingResponse.data.length === 0) {
        throw new Error("Failed to generate embedding");
      }

      const [responseData] = embeddingResponse.data;

      // Insert or update the rule in the database
      const { error: upsertRuleError, data: insertedRule } =
        await supabaseClient
          .from("rules")
          .upsert({
            checksum,
            rule,
            trigger,
            action,
            tags,
            embedding: responseData.embedding,
          })
          .select()
          .limit(1)
          .single();

      if (upsertRuleError) {
        throw upsertRuleError;
      }

      console.log(`Successfully processed rule: "${rule}"`);
    } catch (err) {
      console.error(`Failed to process rule: "${rule}"`);
      console.error(err);
    }
  }

  console.log("Embedding generation complete");
}

async function main() {
  await generateEmbeddings();
}

main().catch((err) => console.error(err));
