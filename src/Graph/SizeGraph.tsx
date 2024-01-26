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
  
  export default function SizeGraph({category}:{category: string | undefined}) {
    const chartData = useContext(DataContext);
    const [finalData, setFinalData] = useState([{}]);
  
    useEffect(() => {
      const size = getIndexOfFeature('size', chartData) || [];
      const vendors = getIndexOfFeature('vendor', chartData) || [];
  
      const data = size?.slice(1).map((size, index) => ({
        name: vendors[index+1] || 'vendors',
        size: size && typeof (size) == 'string' ? parseFloat(size.replace('mm', '')) : size
  
      }));
  
      setFinalData(data);
    }, [chartData]);
  
    return (
      <>
      {category && <BarChart 
      className="shadow-md p-4 border"
        width={700}
        height={300}
        data={finalData}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="size"  fill="blue" />
      </BarChart>}
      </>
    );
  }
  