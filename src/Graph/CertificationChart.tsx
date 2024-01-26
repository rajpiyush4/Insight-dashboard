import { useContext, useEffect, useState } from "react";
import { BarChart, Bar, Tooltip, Legend, CartesianGrid, YAxis, XAxis, ReferenceLine, Label } from "recharts";
import { DataContext } from "../Context/DataProvider";
import { getIndexOfFeature } from "../lib/SheetFormat";

const CertificationChart = ({ category }: { category: string | undefined }) => {
  const chartData = useContext(DataContext);
  const [certificationData, setCertificationData] = useState<{ name: string, fdaApproval: number, ceCertification: number }[]>([]);

  useEffect(() => {
    const vendors = getIndexOfFeature("vendor", chartData)
    const ceCertification = getIndexOfFeature("CE Certification", chartData)
    const fdaApproval = getIndexOfFeature("FDA Approved", chartData)
    const data = vendors?.slice(1).map((cd, index) => ({
      name: cd,
      fdaApproval: fdaApproval[index + 1] === "Yes" ? 1 : -1,
      ceCertification: ceCertification[index + 1] === "Yes" ? 1 : -1
    }));

    setCertificationData(data);
  }, [chartData]);


  return (
    <>

      {category &&
       
          <BarChart
            className="p-4 shadow-md border "
            width={700}
            height={400}
            data={certificationData}
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
            <Bar dataKey="fdaApproval" fill="#121212" />
            <Bar dataKey="ceCertification" fill="grey" />
          </BarChart>

      }
    </>
  );
};

export default CertificationChart;
