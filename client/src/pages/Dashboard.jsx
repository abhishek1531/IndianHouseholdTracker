import DashboardCard from "../components/DashboardCard";
import ExpenseChart from "../components/ExpenseChart";

function Dashboard() {

  const transactions = [
    {
      title: "Milk",
      amount: 40,
    },
    {
      title: "Petrol",
      amount: 500,
    },
    {
      title: "Groceries",
      amount: 1200,
    },
  ];

  return (
    <div>

      <h1 className="text-4xl font-bold mb-10">
        Dashboard
      </h1>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <DashboardCard
          title="Total Expense"
          amount="12,500"
        />

        <DashboardCard
          title="Monthly Budget"
          amount="20,000"
        />

        <DashboardCard
          title="Remaining"
          amount="7,500"
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

          {transactions.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-center justify-between"
            >

              <h3 className="text-lg">
                {item.title}
              </h3>

              <p className="text-green-400 font-semibold">
                ₹ {item.amount}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;