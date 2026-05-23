import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Food",
    value: 4000,
  },
  {
    name: "Travel",
    value: 2500,
  },
  {
    name: "Shopping",
    value: 3000,
  },
  {
    name: "Bills",
    value: 2000,
  },
];

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
];

function ExpenseChart() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-[400px]">

      <h2 className="text-2xl font-bold mb-6">
        Expense Analytics
      </h2>

      <ResponsiveContainer width="100%" height="90%">

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={120}
            label
          >

            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default ExpenseChart;