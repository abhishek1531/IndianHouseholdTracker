import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 px-8 py-4 flex items-center justify-between">

      <Link
        to="/"
        className="text-3xl font-bold text-green-400"
      >
        GharKharcha AI
      </Link>

      <div className="flex items-center gap-6 text-lg">

        <Link
          to="/"
          className="hover:text-green-400 transition"
        >
          Home
        </Link>

        <Link
          to="/login"
          className="hover:text-green-400 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg transition"
        >
          Register
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;