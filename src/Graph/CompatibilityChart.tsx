import { useContext, useEffect, useState } from "react";
import { BarChart, Bar, Tooltip, Legend, CartesianGrid, YAxis, XAxis, ReferenceLine, Label} from "recharts";
import { DataContext } from "../Context/DataProvider";
import { getIndexOfFeature } from "../lib/SheetFormat";

const CompatibilityChart = ({category}:{category: string|undefined}) => {
  const chartData = useContext(DataContext);
  const [compatibilityData, setCompatibilityData] = useState<{ name: string, iOSCompatible: number, androidCompatible: number }[]>([]);

  useEffect(() => {
    const vendors = getIndexOfFeature("vendor", chartData)
    const iOSCompatibility = getIndexOfFeature("iOS compatible", chartData)
    const androidCompatibility = getIndexOfFeature("Android compatible", chartData)

    const data = vendors?.slice(1).map((vendor, index) => ({
      name: vendor,
      iOSCompatible: iOSCompatibility[index + 1] === "Yes" ? 1 : -1,
      androidCompatible: androidCompatibility[index + 1] === "Yes" ? 1 : -1
    }));

    setCompatibilityData(data);
  }, [chartData]);



  return (
    <>
      {category && 
      <BarChart
        className="p-4 shadow-md border "
        width={700}
        height={400}
        data={compatibilityData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis >
            <Label value="1: yes" angle={-90} position="insideLeft" offset={-1} />
            <Label value="-1: no" angle={-90} position="insideBottom" offset={-4}  />
              </YAxis>
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="androidCompatible" fill="#212121" />
        <Bar dataKey="iOSCompatible" fill="grey" />
      </BarChart>
      }
    </>
  );
};

export default CompatibilityChart;
