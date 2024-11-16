"use client";

import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const dbData = [
  {
    id: 8,
    rule: "When status changes to something, send an email to someone",
    trigger: "When status changes to something",
    action: "send an email to someone",
    tags: ["status", "email", "notification"],
    condition: null,
    similarity: 0.940882802009583,
  },
  {
    id: 26,
    rule: "When status changes to something notify someone",
    trigger: "status changes to something",
    action: "notify someone",
    tags: ["status", "notify"],
    condition: null,
    similarity: 0.92425012588501,
  },
  {
    id: 2,
    rule: "When status changes to something, notify someone",
    trigger: "When status changes to something",
    action: "notify someone",
    tags: ["status", "notification"],
    condition: null,
    similarity: 0.920490562915802,
  },
  {
    id: 98,
    rule: "When status changes from something to something else, notify someone",
    trigger: "When status changes from something to something else",
    action: "notify someone",
    tags: ["status change", "notify", "someone"],
    condition: null,
    similarity: 0.918746769428253,
  },
  {
    id: 39,
    rule: "Every time period if status is something send an email to someone",
    trigger: "Every time period",
    action: "send an email to someone",
    tags: ["periodic", "status", "email", "Gmail"],
    condition: null,
    similarity: 0.912129342556,
  },
  {
    id: 13,
    rule: "When status changes to specific value, notify someone",
    trigger: "status_changed",
    action: "notify_someone",
    tags: ["status", "change", "notification"],
    condition: null,
    similarity: 0.904382824897766,
  },
  {
    id: 36,
    rule: "Every time period if status is something notify someone",
    trigger: "Every time period",
    action: "notify someone",
    tags: ["periodic", "status", "notify"],
    condition: null,
    similarity: 0.903151452541351,
  },
  {
    id: 20,
    rule: "When status changes from one value to another, notify someone else",
    trigger: "status_changed",
    action: "notify_someone_else",
    tags: ["status", "change", "specific_transition", "notification"],
    condition: null,
    similarity: 0.900209009647369,
  },
  {
    id: 34,
    rule: "Every time period if date has passed and status is something notify someone",
    trigger: "Every time period",
    action: "notify someone",
    tags: ["periodic", "date", "status", "notify"],
    condition: null,
    similarity: 0.884876370429993,
  },
];

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const [query, setQuery] = useState<string>(
    searchParams.get("query")?.toString() ?? ""
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async (term: string) => {
    if (!term) {
      toast.error("please enter your query");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/vector-search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: term }),
      });

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();
      setResults(data.data);

      // Update URL
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set("query", term);
      } else {
        params.delete("query");
      }
      replace(`${pathname}?${params.toString()}`);
    } catch (err) {
      setError("An error occurred while searching. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex gap-2 max-w-3xl mx-auto">
        <div className="relative flex flex-1 flex-shrink-0">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            placeholder={placeholder}
            value={searchParams.get("query")?.toString()}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
        {isLoading ? (
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button variant="outline" onClick={() => handleSearch(query)}>
            Search
          </Button>
        )}
      </div>
      {results && results.length > 0 && <RulesList rules={results} />}
    </div>
  );
}

interface Rule {
  id: string;
  rule: string;
  tags: string[];
  similarity: number;
}

const RuleCard = ({ rule }: { rule: Rule }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {rule.rule}
        </h3>

        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mt-2">
            {rule.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-xs font-medium rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-[#323338]">Similarity</span>
          <span className="text-sm font-semibold text-gray-700">
            {(rule.similarity * 100).toFixed(2)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div
            className="bg-[#bbdbc9] h-2.5 rounded-full"
            style={{ width: `${rule.similarity * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const RulesList = ({ rules }: { rules: Rule[] }) => {
  return (
    <div className="mx-auto px-2 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rules.map((rule) => (
          <RuleCard key={rule.id} rule={rule} />
        ))}
      </div>
    </div>
  );
};
