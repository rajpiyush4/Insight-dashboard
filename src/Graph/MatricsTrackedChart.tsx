import  { useContext, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,

} from "recharts";
import { DataContext } from "../Context/DataProvider";
import { getIndexOfFeature } from "../lib/SheetFormat";

const MetricsTrackedChart = ({category}:{category: string | undefined}) => {
  const chartData = useContext(DataContext);
  const [metricsData, setMetricsData] = useState<{ name: string }[]>([]);

  useEffect(() => {
    const vendors = getIndexOfFeature("vendor", chartData) 
    const metrics = getIndexOfFeature("Metrics tracked", chartData) 
    const data = vendors?.slice(1).map((vendors, index) => {
      const Productmetrics = metrics[index +1]?.split(", ") || [];
      return { name: vendors, ...Object.fromEntries(Productmetrics.map(metric => [metric, 1])) };
    });
    setMetricsData(data);
  }, [chartData]);

  return (
    <>
  { category &&
  <BarChart className="p-4 shadow-md border" width={800} height={400} data={metricsData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {Object.keys(metricsData[0] || {}).map((metric, index) => (
        <Bar key={index} dataKey={metric} stackId="a" fill={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
      ))}
    </BarChart>

    }
    </>
  );
};

export default MetricsTrackedChart;
