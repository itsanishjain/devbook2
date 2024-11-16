"use client";
import { DataItem } from "@/app/admin/page";

export default function ({ data }: { data: any }) {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item: DataItem) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4">
              <h2 className="text-2xl font-bold text-white truncate">
                {item.name}
              </h2>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mt-2">
                <span className="font-semibold">Sounds like:</span>{" "}
                {item.sounds_like}
              </p>
            </div>
            <div className="bg-gray-100 px-4 py-3 mt-4">
              <button className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition-colors duration-300">
                More Info
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    // <div className="container mx-auto p-6">
    //   <div className="bg-white shadow-md rounded-lg overflow-hidden">
    //     <div className="divide-y divide-gray-200">
    //       {data.map((item: DataItem, index: number) => (
    //         <div
    //           key={item.id}
    //           className={`flex flex-col sm:flex-row ${
    //             index % 2 === 0 ? "bg-gray-50" : "bg-white"
    //           }`}
    //         >
    //           <div className="flex-1 px-6 py-4 flex items-center">
    //             <span className="text-gray-700">{item.name}</span>
    //           </div>
    //           <div className="flex-1 px-6 py-4 flex items-center">
    //             <span className="text-gray-600">{item.sounds_like}</span>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}
