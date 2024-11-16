"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataItem } from "@/app/admin/page";
import { useState } from "react";
import toast from "react-hot-toast";

export function STable({ data }: { data: DataItem[] }) {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleRowCheckboxChange = (id: number) => {
    const isChecked = checkedItems.includes(id);

    // Update checked items state
    const updatedCheckedItems = isChecked
      ? checkedItems.filter((itemId) => itemId !== id)
      : [...checkedItems, id];

    setCheckedItems(updatedCheckedItems);

    // Get existing selected items from localStorage
    const existingItemsJson = localStorage.getItem("selectedItems");
    const existingItems: DataItem[] = existingItemsJson
      ? JSON.parse(existingItemsJson)
      : [];

    // Find the item to be added or removed
    const item = data.find((item: DataItem) => item.id === id);

    if (item) {
      if (!isChecked) {
        // Add the item if it doesn't already exist in localStorage
        if (!existingItems.some((existingItem) => existingItem.id === id)) {
          localStorage.setItem(
            "selectedItems",
            JSON.stringify([...existingItems, item])
          );
        }
        toast.success("Item saved & copied to clipboard");

        // Copy the item to clipboard
        navigator.clipboard.writeText(`${item.name} - ${item.sounds_like}`);
      } else {
        // Remove the item from localStorage
        const updatedExistingItems = existingItems.filter(
          (existingItem) => existingItem.id !== id
        );
        localStorage.setItem(
          "selectedItems",
          JSON.stringify(updatedExistingItems)
        );
        toast.error("Item removed");
      }
    }
  };

  return (
    <Table className="w-full table-auto mx-auto overflow-x-auto">
      <TableHeader>
        <TableRow>
          <TableHead>Save&Copy</TableHead>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead className="text-right">Sounds Like</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="w-full table-auto mx-auto">
        {data.map((item: DataItem) => (
          <TableRow key={item.id}>
            <TableCell>
              <input
                type="checkbox"
                checked={checkedItems.includes(item.id)}
                onChange={() => handleRowCheckboxChange(item.id)}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
            </TableCell>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell className="text-right">{item.sounds_like}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
