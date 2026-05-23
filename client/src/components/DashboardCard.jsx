function DashboardCard({ title, amount }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <h2 className="text-zinc-400 text-lg">
        {title}
      </h2>

      <p className="text-3xl font-bold mt-4 text-green-400">
        ₹ {amount}
      </p>

    </div>
  );
}

export default DashboardCard;