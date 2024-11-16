import MetricsDashboard from "@/components/MetricsDashboard";
import Search from "@/components/Search";
import SponsorDashboard from "@/components/SponsorCard";
import { sponsorsData } from "@/data/sponsor_data";

export default async function Home() {
  return (
    <>
      <MetricsDashboard />
      <SponsorDashboard sponsorsData={sponsorsData} />
    </>
  );
}
