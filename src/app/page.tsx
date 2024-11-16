import MetricsDashboard from "@/components/MetricsDashboard";
import Search from "@/components/Search";

export default async function Home() {
  return (
    <>
      <MetricsDashboard />
      <Search placeholder="search..." />
    </>
  );
}
