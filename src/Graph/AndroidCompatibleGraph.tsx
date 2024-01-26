import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Yes", value: 30 },
  { name: "No", value: 70 },
  // Add more data for other categories or products
];

const COLORS = ["#4CAF50", "#FF5722"]; // Green for Yes, Orange for No

const AndroidCompatibleGraph = () => {
  return (
    <PieChart width={400} height={300} className="shadow-md border">
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default AndroidCompatibleGraph;
