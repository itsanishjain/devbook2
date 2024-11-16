import { createClient } from "@supabase/supabase-js";
import { Configuration, OpenAIApi } from "openai-edge";
import { ApplicationError, UserError } from "@/lib/errors";

const openAiKey = process.env.OPENAI_API_KEY;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const config = new Configuration({
  apiKey: openAiKey,
});
const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    if (!openAiKey) {
      throw new ApplicationError("Missing environment variable OPENAI_API_KEY");
    }

    if (!supabaseUrl) {
      throw new ApplicationError("Missing environment variable SUPABASE_URL");
    }

    if (!supabaseServiceKey) {
      throw new ApplicationError(
        "Missing environment variable SUPABASE_SERVICE_ROLE_KEY"
      );
    }

    const requestData = await request.json();

    if (!requestData) {
      throw new UserError("Missing request data");
    }

    const { query } = requestData;

    if (!query) {
      throw new UserError("Missing query in request data");
    }

    const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);

    // Generate embedding for the query
    const embeddingResponse = await openai.createEmbedding({
      model: "text-embedding-ada-002",
      input: query.replaceAll("\n", " "),
    });

    if (embeddingResponse.status !== 200) {
      throw new ApplicationError(
        "Failed to create embedding for query",
        embeddingResponse
      );
    }

    const {
      data: [{ embedding }],
    } = await embeddingResponse.json();

    // Perform the semantic search using the existing match_rules function
    const { data: matchedRules, error: matchError } = await supabaseClient.rpc(
      "match_rules",
      {
        embedding: embedding,
        match_threshold: 0.78,
        match_count: 9,
      }
    );

    if (matchError) {
      throw new ApplicationError("Failed to match rules", matchError);
    }

    // Return the matched rules
    return Response.json(
      { message: "success", data: matchedRules, error: false },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return Response.json(
      { message: "Error processing request", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  return Response.json("Vector search GET API");
}
