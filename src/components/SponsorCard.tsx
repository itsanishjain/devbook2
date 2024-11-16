"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, DollarSign, Calendar } from "lucide-react";

interface EventAmounts {
  [key: string]: number;
}

interface Sponsor {
  total_spent: number;
  events_sponsored: string[];
  max_amount: number;
  event_amounts: EventAmounts;
}

interface SponsorsData {
  [key: string]: Sponsor;
}

interface DetailPanelProps {
  sponsor: Sponsor;
  sponsorName: string;
}

const SponsorDashboard = ({ sponsorsData }: { sponsorsData: SponsorsData }) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const getPercentageOfMax = (amount: number, maxAmount: number): number =>
    (amount / maxAmount) * 100;

  const DetailPanel = ({ sponsor }: DetailPanelProps) => (
    <div className="bg-gray-50 p-6">
      <div className="space-y-4">
        {sponsor.events_sponsored.map((eventName) => (
          <div key={eventName} className="border-b pb-3">
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                {eventName}
              </div>
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 text-gray-500" />
                <span className="font-bold">
                  {sponsor.event_amounts[eventName].toLocaleString()}
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 rounded-full h-2"
                style={{
                  width: `${getPercentageOfMax(
                    sponsor.event_amounts[eventName],
                    sponsor.max_amount
                  )}%`,
                }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {getPercentageOfMax(
                sponsor.event_amounts[eventName],
                sponsor.max_amount
              ).toFixed(1)}
              % of max amount
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold tracking-tight mb-4">
        Sponsor Dashboard
      </h2>
      <div className="rounded-lg border border-gray-200 overflow-hidden bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-gray-600 font-medium">
                Sponsor
              </th>
              <th className="text-right py-3 px-4 text-gray-600 font-medium">
                Total Spent
              </th>
              <th className="text-right py-3 px-4 text-gray-600 font-medium">
                Events Sponsored
              </th>
              <th className="text-right py-3 px-4 text-gray-600 font-medium">
                Max Amount
              </th>
              <th className="w-16 py-3 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(sponsorsData).map(
              ([sponsorName, sponsor], index) => (
                <React.Fragment key={sponsorName}>
                  <tr
                    className={`border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors ${
                      expandedRow === index ? "bg-gray-50" : ""
                    }`}
                    onClick={() =>
                      setExpandedRow(expandedRow === index ? null : index)
                    }
                  >
                    <td className="py-4 px-4">
                      <span className="text-gray-900 font-medium">
                        {sponsorName}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right text-gray-900 font-medium">
                      ${sponsor.total_spent.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-right text-gray-900">
                      {sponsor.events_sponsored.length}
                    </td>
                    <td className="py-4 px-4 text-right text-gray-900">
                      ${sponsor.max_amount.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {expandedRow === index ? (
                        <ChevronUp className="h-5 w-5 inline-block text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 inline-block text-gray-500" />
                      )}
                    </td>
                  </tr>
                  {expandedRow === index && (
                    <tr>
                      <td colSpan={5} className="p-0">
                        <DetailPanel
                          sponsor={sponsor}
                          sponsorName={sponsorName}
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SponsorDashboard;
