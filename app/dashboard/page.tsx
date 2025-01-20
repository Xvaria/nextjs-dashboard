import { fetchRevenue } from "../lib/data";

export default function DashboardPage() {
  const res = fetchRevenue();
  console.log(res);
  return <p>Dashboard page</p>;
}
