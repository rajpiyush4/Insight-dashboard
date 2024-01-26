import { useContext, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,

} from "recharts";
import { DataContext } from "../Context/DataProvider";
import { getIndexOfFeature } from "../lib/SheetFormat";

const SizeWeightChart = ({ category }: { category: string | undefined }) => {
  const chartData = useContext(DataContext);
  const [sizeWeightData, setSizeWeightData] = useState<{ name: string; size: number; weight: number; }[]>([]);

  useEffect(() => {
    const vendors = getIndexOfFeature("vendor", chartData);
    const sizes = getIndexOfFeature("Size", chartData);
    const weights = getIndexOfFeature("Weight", chartData);
    const data = vendors?.slice(1).map((vendor, index) => ({
      name: vendor,
      size: typeof (sizes[index] === 'string') ? parseInt(sizes[index + 1].replace("mm", "")) : parseInt(sizes[index + 1]),
      weight: parseFloat(weights[index + 1]) || 0,
    }));
    setSizeWeightData(data);
  }, [chartData]);

  const COLORS = ["black", "beige"];

  return (
    <>
      {category && (
        <LineChart className="p-4 shadow-md border" width={700} height={400} data={sizeWeightData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} />

          <YAxis>
            <Label value="Size (mm)" angle={-90} position="insideLeft" offset={-1} />
            <Label value="Weight (oz)" angle={-90} position="insideBottom" offset={-1}  />
          </YAxis>

          <Tooltip />
          <Legend />
          <Line dataKey="size" stroke="black" fill={COLORS[0]} legendType="rect" />
          <Line dataKey="weight" stroke="black" fill={COLORS[1]} legendType="rect" />
        </LineChart>
      )}
    </>
  );
};

export default SizeWeightChart;
