import {
  useContext,
  useState,
  useEffect,
} from "react";

import DashboardCard from "../components/DashboardCard";

import ExpenseChart from "../components/ExpenseChart";

import {
  ExpenseContext,
} from "../context/ExpenseContext";

function Dashboard() {

  const {
    expenses,
  } = useContext(ExpenseContext);

  // Budget State

  const [monthlyBudget, setMonthlyBudget] =
    useState(() => {

      const savedBudget =
        localStorage.getItem(
          "monthlyBudget"
        );

      return savedBudget
        ? Number(savedBudget)
        : 20000;
    });

  // Save Budget

  useEffect(() => {

    localStorage.setItem(
      "monthlyBudget",
      monthlyBudget
    );

  }, [monthlyBudget]);

  // Total Expense

  const totalExpense =
    expenses.reduce(
      (total, item) =>
        total + item.amount,
      0
    );

  // Remaining Budget

  const remainingBudget =
    monthlyBudget - totalExpense;

  // Budget Percentage

  const budgetUsedPercentage =
    monthlyBudget > 0
      ? (
          (totalExpense /
            monthlyBudget) *
          100
        ).toFixed(1)
      : 0;

  return (
    <div>

      <h1 className="text-4xl font-bold mb-10">
        Dashboard
      </h1>

      {/* Budget Input */}

      <div className="mb-10 max-w-md">

        <label className="block mb-3 text-lg font-semibold">
          Set Monthly Budget
        </label>

        <input
          type="number"
          value={monthlyBudget}
          onChange={(e) =>
            setMonthlyBudget(
              Number(e.target.value)
            )
          }
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-green-400"
        />

      </div>

      {/* Warning System */}

      {budgetUsedPercentage >= 100 ? (

        <div className="bg-red-500/20 border border-red-500 text-red-400 rounded-2xl p-5 mb-8 text-lg font-semibold">
          ⚠️ You have exceeded your monthly budget!
        </div>

      ) : budgetUsedPercentage >= 80 ? (

        <div className="bg-yellow-500/20 border border-yellow-500 text-yellow-400 rounded-2xl p-5 mb-8 text-lg font-semibold">
          ⚠️ You have used {budgetUsedPercentage}% of your budget.
        </div>

      ) : (

        <div className="bg-green-500/20 border border-green-500 text-green-400 rounded-2xl p-5 mb-8 text-lg font-semibold">
          ✅ Your expenses are under control.
        </div>

      )}

      {/* Progress Bar */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-10">

        <div className="flex items-center justify-between mb-4">

          <h2 className="text-xl font-bold">
            Budget Usage
          </h2>

          <p className="text-lg font-semibold">
            {budgetUsedPercentage}%
          </p>

        </div>

        <div className="w-full bg-zinc-800 rounded-full h-5 overflow-hidden">

          <div
            className={`h-full transition-all duration-500 ${
              budgetUsedPercentage >= 100
                ? "bg-red-500"
                : budgetUsedPercentage >= 80
                ? "bg-yellow-500"
                : "bg-green-500"
            }`}
            style={{
              width: `${Math.min(
                budgetUsedPercentage,
                100
              )}%`,
            }}
          />

        </div>

      </div>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <DashboardCard
          title="Total Expense"
          amount={totalExpense}
        />

        <DashboardCard
          title="Monthly Budget"
          amount={monthlyBudget}
        />

        <DashboardCard
          title="Remaining"
          amount={remainingBudget}
        />

      </div>

      {/* Chart Section */}

      <div className="mt-12">
        <ExpenseChart />
      </div>

      {/* Recent Transactions */}

      <div className="mt-12">

        <h2 className="text-2xl font-bold mb-6">
          Recent Transactions
        </h2>

        <div className="space-y-4">

          {expenses.length === 0 ? (

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-zinc-400">
              No expenses added yet
            </div>

          ) : (

            expenses
              .slice()
              .reverse()
              .slice(0, 5)
              .map((item) => (

                <div
                  key={item.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-center justify-between"
                >

                  <div>

                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-zinc-400 mt-1">
                      {item.category}
                    </p>

                    <p className="text-sm text-zinc-500 mt-2">
                      {item.createdAt}
                    </p>

                  </div>

                  <p className="text-green-400 font-bold text-lg">
                    ₹ {item.amount}
                  </p>

                </div>

              ))

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;