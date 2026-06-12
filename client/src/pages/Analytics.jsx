import {
  useContext,
} from "react";

import {
  ExpenseContext,
} from "../context/ExpenseContext";

function Analytics() {

  const {
    expenses,
  } = useContext(ExpenseContext);

  // Total Expense

  const totalExpense =
    expenses.reduce(
      (total, item) =>
        total + item.amount,
      0
    );

  // Highest Expense

  const highestExpense =
    expenses.length > 0
      ? Math.max(
          ...expenses.map(
            (item) => item.amount
          )
        )
      : 0;

  // Average Expense

  const averageExpense =
    expenses.length > 0
      ? (
          totalExpense /
          expenses.length
        ).toFixed(2)
      : 0;

  // Category Totals

  const categoryTotals = {};

  expenses.forEach((item) => {

    if (
      categoryTotals[item.category]
    ) {

      categoryTotals[item.category] +=
        item.amount;

    } else {

      categoryTotals[item.category] =
        item.amount;
    }

  });

  // Top Spending Category

  let topCategory = "None";

  let topAmount = 0;

  for (let category in categoryTotals) {

    if (
      categoryTotals[category] >
      topAmount
    ) {

      topAmount =
        categoryTotals[category];

      topCategory = category;
    }
  }

  return (
    <div>

      <h1 className="text-4xl font-bold mb-10">
        Analytics
      </h1>

      {/* Analytics Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          <h2 className="text-zinc-400 text-lg">
            Total Expenses
          </h2>

          <p className="text-3xl font-bold text-green-400 mt-4">
            ₹ {totalExpense}
          </p>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          <h2 className="text-zinc-400 text-lg">
            Highest Expense
          </h2>

          <p className="text-3xl font-bold text-red-400 mt-4">
            ₹ {highestExpense}
          </p>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          <h2 className="text-zinc-400 text-lg">
            Average Expense
          </h2>

          <p className="text-3xl font-bold text-blue-400 mt-4">
            ₹ {averageExpense}
          </p>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          <h2 className="text-zinc-400 text-lg">
            Top Category
          </h2>

          <p className="text-3xl font-bold text-yellow-400 mt-4">
            {topCategory}
          </p>

        </div>

      </div>

      {/* Smart Insights */}

      <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

        <h2 className="text-3xl font-bold mb-6">
          Smart Insights
        </h2>

        {expenses.length === 0 ? (

          <p className="text-zinc-400">
            No expense data available
          </p>

        ) : (

          <div className="space-y-4 text-lg">

            <p>
              You have added{" "}
              <span className="text-green-400 font-bold">
                {expenses.length}
              </span>{" "}
              total transactions.
            </p>

            <p>
              Your highest spending category is{" "}
              <span className="text-yellow-400 font-bold">
                {topCategory}
              </span>.
            </p>

            <p>
              Your average expense amount is{" "}
              <span className="text-blue-400 font-bold">
                ₹ {averageExpense}
              </span>.
            </p>

            <p>
              Your total recorded expenses are{" "}
              <span className="text-green-400 font-bold">
                ₹ {totalExpense}
              </span>.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Analytics;