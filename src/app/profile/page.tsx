"use client";

import { useEffect, useState } from "react";
import DataTable from "@/components/DataTable";
import { DataItem } from "@/app/admin/page";
import { STable } from "@/components/STable";

export default function Page() {
  const [savedItems, setSavedItems] = useState<DataItem[]>([]);

  useEffect(() => {
    const existingItemsJson = localStorage.getItem("selectedItems");
    const existingItems: DataItem[] = existingItemsJson
      ? JSON.parse(existingItemsJson)
      : [];
    setSavedItems(existingItems);
  }, []);

  return (
    <div className="pb-8">
      <STable data={savedItems} />
    </div>
  );
}
