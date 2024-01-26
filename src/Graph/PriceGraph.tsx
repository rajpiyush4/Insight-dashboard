import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataProvider";
import { getIndexOfFeature } from "../lib/SheetFormat";

export default function PriceGraph({ category }: { category: string | undefined }) {
  const chartData = useContext(DataContext);
  const [finalData, setFinalData] = useState([{}]);

  useEffect(() => {
    const prices = getIndexOfFeature('Pricing', chartData) || [];
    const vendors = getIndexOfFeature('vendor', chartData) || [];

    const data = prices?.slice(1).map((price, index) => ({
      name: vendors[index + 1] || 'vendors',
      price: price && typeof (price) == 'string' ? parseFloat(price.replace('$', '')) : price

    }));

    setFinalData(data);
  }, [chartData]);

  return (
    <>
      {category && <BarChart
      className="shadow-md border p-4"
        width={700}
        height={300}
        data={finalData}
        
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="orange" />
      </BarChart>}
    </>
  );
}
