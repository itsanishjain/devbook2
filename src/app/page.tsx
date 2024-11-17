import DevProfileDashboard from "@/components/DevProfileDashboard";
import MetricsDashboard from "@/components/MetricsDashboard";
import Search from "@/components/Search";
import SponsorDashboard from "@/components/SponsorCard";
import { sponsorsData } from "@/data/sponsor_data";
import { userProfiles } from "@/data/user_profile";

export default async function Home() {
  return (
    <>
      <MetricsDashboard />
      <SponsorDashboard sponsorsData={sponsorsData} />
      <DevProfileDashboard userProfiles={userProfiles} />
    </>
  );
}
