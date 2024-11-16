"use client";
import { DataItem } from "@/app/admin/page";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ({ data }: { data: DataItem[] }) {
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
        toast.success("Item saved");
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
    <div className="w-full my-4 px-2">
      {data.length > 0 && (
        <div className="w-full overflow-x-auto">
          <table className="max-w-4xl mx-auto w-full table-auto">
            <thead className="bg-gray-800 text-white">
              <tr>
                {/* <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-1/12">
                  Select
                </th> */}
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-3/12">
                  Name
                </th>
                {/* <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-2/12">
                  Gender
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-3/12">
                  Cleanliness
                </th> */}
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-3/12">
                  Sounds Like
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item: DataItem, index: number) => (
                <tr key={index} className="hover:bg-gray-100">
                  {/* <td className="px-6 py-4 whitespace-nowrap w-1/12">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes(item.id)}
                      onChange={() => handleRowCheckboxChange(item.id)}
                      className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                  </td> */}
                  <td className="px-6 py-4 whitespace-nowrap w-3/12">
                    {item?.name || ""}
                  </td>
                  {/* <td className="px-6 py-4 whitespace-nowrap w-2/12">
                    {item?.gender || ""}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap w-3/12">
                    {item?.cleanliness || ""}
                  </td> */}
                  <td className="px-6 py-4 whitespace-nowrap w-3/12">
                    {item?.sounds_like || ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
