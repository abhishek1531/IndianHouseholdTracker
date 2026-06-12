import {
  useContext,
} from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  ExpenseContext,
} from "../context/ExpenseContext";

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
  "#a855f7",
  "#14b8a6",
];

function ExpenseChart() {

  const {
    expenses,
  } = useContext(ExpenseContext);

  // Convert expenses into category totals

  const categoryData = {};

  expenses.forEach((item) => {

    if (categoryData[item.category]) {

      categoryData[item.category] +=
        item.amount;

    } else {

      categoryData[item.category] =
        item.amount;
    }

  });

  // Convert object to array

  const chartData =
    Object.keys(categoryData).map(
      (key) => ({
        name: key,
        value: categoryData[key],
      })
    );

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-[450px]">

      <h2 className="text-2xl font-bold mb-6">
        Expense Analytics
      </h2>

      {chartData.length === 0 ? (

        <div className="h-full flex items-center justify-center text-zinc-500 text-xl">
          No expense data available
        </div>

      ) : (

        <ResponsiveContainer
          width="100%"
          height="90%"
        >

          <PieChart>

            <Pie
              data={chartData}
              dataKey="value"
              outerRadius={140}
              label
            >

              {chartData.map(
                (entry, index) => (

                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index %
                        COLORS.length
                      ]
                    }
                  />

                )
              )}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      )}

    </div>
  );
}

export default ExpenseChart;