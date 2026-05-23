import { useState, useEffect, useRef } from "react";
import InputField from "../components/InputField";
import toast from "react-hot-toast";

function Expenses() {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const [expenses, setExpenses] = useState([]);
  const isFirstRender = useRef(true);

  // Load data from localStorage

  useEffect(() => {

    const savedExpenses =
      localStorage.getItem("expenses");

    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }

  }, []);

  // Save data to localStorage

  useEffect(() => {

  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }

  localStorage.setItem(
    "expenses",
    JSON.stringify(expenses)
  );

}, [expenses]);

  function handleExpense(e) {
    e.preventDefault();

    if (!title || !amount || !category) {
      toast.error("Please fill all fields");
      return;
    }

    const expenseData = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
    };

    setExpenses((prev) => [...prev, expenseData]);

    toast.success("Expense Added");

    setTitle("");
    setAmount("");
    setCategory("");
  }

  function handleDelete(id) {

    const updatedExpenses =
      expenses.filter((item) => item.id !== id);

    setExpenses(updatedExpenses);

    toast.success("Expense Deleted");
  }

  return (
    <div>

      <h1 className="text-4xl font-bold mb-10">
        Add Expense
      </h1>

      {/* Expense Form */}

      <form
        onSubmit={handleExpense}
        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-xl"
      >

        <div className="space-y-5">

          <InputField
            type="text"
            placeholder="Expense Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <InputField
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-green-400"
          >

            <option value="">
              Select Category
            </option>

            <option value="Food">
              Food
            </option>

            <option value="Travel">
              Travel
            </option>

            <option value="Shopping">
              Shopping
            </option>

            <option value="Bills">
              Bills
            </option>

          </select>

          <button
            className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl text-lg font-semibold transition"
          >
            Add Expense
          </button>

        </div>

      </form>

      {/* Expense List */}

      <div className="mt-12">

        <h2 className="text-2xl font-bold mb-6">
          Expense List
        </h2>

        <div className="space-y-4">

          {expenses.map((item) => (
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

              </div>

              <div className="flex items-center gap-5">

                <p className="text-green-400 font-bold text-lg">
                  ₹ {item.amount}
                </p>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Expenses;