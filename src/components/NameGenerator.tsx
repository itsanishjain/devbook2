"use client";
import { useState } from "react";
import { SelectBox } from "./SelectBox";
import DataTable from "./DataTable";
import DataCard from "./DataCard";
import { STable } from "./STable";

import { DataItem } from "@/app/admin/page";
import ThreeDbutton from "./ThreeDbutton";

export default function NameGenerator() {
  const [text, setText] = useState("");
  const [streamDream, setStreamDream] = useState<DataItem[]>();
  const [loading, setLoading] = useState(false);

  const fetchNames = async () => {
    const url = "/api/fetch-names";
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          limit: 6,
          gender: selectedOptions.gender,
          cleanliness: selectedOptions.cleanliness,
        }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const jsonResponse = await response.json();
      console.log("db", jsonResponse);
      if (jsonResponse.message === "success") {
        console.log("ASDFADS");
        setStreamDream(jsonResponse.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const genderOptions = [
    { value: "All", label: "All" },
    { value: "M", label: "Male" },
    { value: "F", label: "Female" },
  ];

  const cleanlinessOptions = [
    { value: "All", label: "All" },
    { value: "Clean", label: "Clean" },
    { value: "Dirty", label: "Suggestive" },
  ];

  const [selectedOptions, setSelectedOptions] = useState({
    gender: "All",
    cleanliness: "All",
  });

  const handleSelectChange = (
    option: "gender" | "cleanliness",
    value: string
  ) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [option]: value,
    }));
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex-1 rounded-lg px-6 p-2">
          <div className="mt-8 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-x-2">
              <label htmlFor="gender" className="font-semibold">
                Gender:
              </label>
              <SelectBox
                items={genderOptions}
                value={selectedOptions.gender}
                option="gender"
                onChange={handleSelectChange}
              />
            </div>
            <div className="flex flex-col md:flex-row items-center space-x-2">
              <label htmlFor="cleanliness" className="font-semibold">
                Cleanliness:
              </label>
              <SelectBox
                items={cleanlinessOptions}
                value={selectedOptions.cleanliness}
                option="cleanliness"
                onChange={handleSelectChange}
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <ThreeDbutton
              text="Generate"
              isLoading={loading}
              onClick={fetchNames}
            />
          </div>
        </div>
      </div>

      {streamDream ? (
        <div className="">
          {/* <DataTable data={streamDream} /> */}
          <STable data={streamDream} />
        </div>
      ) : null}
    </div>
  );
}
