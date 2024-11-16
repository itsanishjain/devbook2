"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export interface DataItem {
  id: number;
  name: string;
  gender: "M" | "F";
  cleanliness: "Clean" | "Dirty";
  sounds_like: string;
}

export default function Admin() {
  const [jsonInput, setJsonInput] = useState("");
  const [data, setData] = useState<DataItem[]>([]);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const propmt = `Prompt:
  Create a list of punny names in JSON format. Each entry should include:

  A "name" (string)
  A "gender" (string, either "M" or "F")
  A "cleanliness" rating (string, either "Clean" or "Dirty")
  A "sounds_like" explanation (string)

  The names should be based on popular name conventions with a twist, ranging from clean to suggestive wordplay. Include both male and female names. The "sounds_like" field should explain what the name sounds like when spoken aloud, revealing the pun.
  Generate [X] names in this format. Here's an example of what one entry should look like:

  {
    "name": "Anita Bath",
    "gender": "F",
    "cleanliness": "Clean",
    "sounds_like": "I need a bath"
  }

  `;

  const submitData = async () => {
    const checkedData = data.filter((item) => checkedItems.includes(item.id));
    const url = "/api/add-names";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: checkedData,
        }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      toast.success("success");
    } catch (error) {
    } finally {
    }
  };

  const handleJsonInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setJsonInput(event.target.value);
  };

  const handleSubmit = () => {
    try {
      const parsedData = JSON.parse(jsonInput);
      setData(parsedData);
      setCheckedItems(parsedData.map((item: DataItem) => item.id)); // Default all items checked
    } catch (error) {
      console.error("Error parsing JSON:", error);
      alert("Error parsing JSON. Please ensure it's valid JSON.");
    }
  };

  const handleRowCheckboxChange = (id: number) => {
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.includes(id)
        ? prevCheckedItems.filter((itemId) => itemId !== id)
        : [...prevCheckedItems, id]
    );
  };

  const showCheckedItems = () => {
    const checkedData = data.filter((item) => checkedItems.includes(item.id));
    console.log("Checked items:", checkedData);
  };

  const textAreaPlaceholder = `[
    {
    "name": "Anita Bath",
    "gender": "F",
    "cleanliness": "Clean",
    "sounds_like": "I need a bath"
    },
    {
    "name": "Ben Dover",
    "gender": "M",
    "cleanliness": "Dirty",
    "sounds_like": "Bend over"
    },
]`;

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 prose-markdown prose-lg">{propmt}</div>

      <p className="text-primary">
        Note: Use any prompts But generate json output as the example format
        only
      </p>

      <p className="text-primary">Note: Keep X small like under 200</p>

      <div className="my-4">
        <textarea
          value={jsonInput}
          onChange={handleJsonInputChange}
          placeholder={textAreaPlaceholder}
          className="w-full h-40 p-2 border border-gray-300 rounded"
        />
      </div>
      <button onClick={handleSubmit} className="mb-4 btn btn-primary">
        Submit JSON
      </button>

      {data.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Select
                </th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cleanliness
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sounds Like
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes(item.id)}
                      onChange={() => handleRowCheckboxChange(item.id)}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.cleanliness}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.sounds_like}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button onClick={submitData} className="mt-4 btn btn-secondary">
        Upload
      </button>
    </div>
  );
}
