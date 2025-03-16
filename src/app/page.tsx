"use client";
import { StatCard } from "@/components/StatCard";
import { Chart } from "@/components/Chart";
import { useEffect, useState } from "react";
import { fetchSalesData } from "../utils/dataFetch";
import { Users, DollarSign } from "lucide-react";

export default function DashboardPage() {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchSalesData();
      setSalesData(data);
    };
    load();
  }, []);

  return (
    <div>
      <h1 className="text-2xl mb-6 font-bold">Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Users" value="1,234" icon={<Users className="text-blue-600" />} />
        <StatCard title="Revenue" value="$56,789" icon={<DollarSign className="text-green-600" />} />
      </div>

      {/* Chart */}
      <Chart data={salesData} />
    </div>
  );
}