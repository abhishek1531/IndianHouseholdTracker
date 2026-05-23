function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-6xl font-bold leading-tight">
        Manage Your <span className="text-green-400">Expenses</span>
        <br />
        Smartly with AI
      </h1>

      <p className="text-zinc-400 text-xl mt-6 max-w-2xl">
        GharKharcha AI helps Indian households track expenses,
        manage budgets, and get smart financial insights using AI.
      </p>

      <div className="flex gap-6 mt-10">

        <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-xl text-lg font-semibold transition">
          Get Started
        </button>

        <button className="border border-zinc-700 hover:border-zinc-500 px-8 py-3 rounded-xl text-lg transition">
          Learn More
        </button>

      </div>

    </div>
  );
}

export default Home;