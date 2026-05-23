import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[250px] bg-zinc-900 border-r border-zinc-800 min-h-screen p-6">

      <h1 className="text-3xl font-bold text-green-400 mb-10">
        GharKharcha AI
      </h1>

      <div className="flex flex-col gap-5 text-lg">

        <Link
          to="/dashboard"
          className="hover:text-green-400 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/expenses"
          className="hover:text-green-400 transition"
        >
          Expenses
        </Link>

        <Link
          to="/analytics"
          className="hover:text-green-400 transition"
        >
          Analytics
        </Link>

        <Link
          to="/budget"
          className="hover:text-green-400 transition"
        >
          Budget
        </Link>

        <Link
          to="/profile"
          className="hover:text-green-400 transition"
        >
          Profile
        </Link>

      </div>

    </div>
  );
}

export default Sidebar;