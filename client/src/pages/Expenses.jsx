import {
  useState,
  useContext,
} from "react";

import InputField from "../components/InputField";

import toast from "react-hot-toast";

import {
  ExpenseContext,
} from "../context/ExpenseContext";

function Expenses() {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  // Search + Filter States

  const [search, setSearch] =
    useState("");

  const [filterCategory, setFilterCategory] =
    useState("");

  // Sorting State

  const [sortBy, setSortBy] =
    useState("latest");

  const {
    expenses,
    setExpenses,
  } = useContext(ExpenseContext);

  // Add Expense

  function handleExpense(e) {

    e.preventDefault();

    if (!title || !amount || !category) {

      toast.error(
        "Please fill all fields"
      );

      return;
    }

    const expenseData = {

      id: Date.now(),

      title,

      amount: Number(amount),

      category,

      createdAt:
        new Date().toLocaleString(),
    };

    setExpenses((prev) => [
      ...prev,
      expenseData,
    ]);

    toast.success("Expense Added");

    setTitle("");
    setAmount("");
    setCategory("");
  }

  // Delete Expense

  function handleDelete(id) {

    const updatedExpenses =
      expenses.filter(
        (item) => item.id !== id
      );

    setExpenses(updatedExpenses);

    toast.success(
      "Expense Deleted"
    );
  }

  // Filter Logic

  let filteredExpenses =
    expenses.filter((item) => {

      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        filterCategory === ""
          ? true
          : item.category ===
            filterCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  // Sorting Logic

  if (sortBy === "latest") {

    filteredExpenses =
      filteredExpenses
        .slice()
        .reverse();

  }

  else if (sortBy === "highest") {

    filteredExpenses =
      filteredExpenses
        .slice()
        .sort(
          (a, b) =>
            b.amount - a.amount
        );

  }

  else if (sortBy === "lowest") {

    filteredExpenses =
      filteredExpenses
        .slice()
        .sort(
          (a, b) =>
            a.amount - b.amount
        );

  }

  // Category Badge Colors

  function getCategoryColor(category) {

    switch (category) {

      case "Food":
        return "bg-green-500/20 text-green-400";

      case "Travel":
        return "bg-blue-500/20 text-blue-400";

      case "Shopping":
        return "bg-pink-500/20 text-pink-400";

      case "Bills":
        return "bg-red-500/20 text-red-400";

      default:
        return "bg-zinc-700 text-white";
    }
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
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <InputField
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
          />

          {/* Category */}

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
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

      {/* Search + Filter + Sort */}

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">

        <InputField
          type="text"
          placeholder="Search Expenses..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={filterCategory}
          onChange={(e) =>
            setFilterCategory(
              e.target.value
            )
          }
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-green-400"
        >

          <option value="">
            All Categories
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

        {/* Sort Dropdown */}

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-green-400"
        >

          <option value="latest">
            Latest
          </option>

          <option value="highest">
            Highest Amount
          </option>

          <option value="lowest">
            Lowest Amount
          </option>

        </select>

      </div>

      {/* Expense List */}

      <div className="mt-12">

        <h2 className="text-2xl font-bold mb-6">
          Expense List
        </h2>

        <div className="space-y-4">

          {filteredExpenses.length === 0 ? (

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-zinc-400">
              No matching expenses found
            </div>

          ) : (

            filteredExpenses.map((item) => (

              <div
                key={item.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-center justify-between"
              >

                <div>

                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  {/* Category Badge */}

                  <span
                    className={`inline-block mt-3 px-4 py-1 rounded-full text-sm font-semibold ${getCategoryColor(item.category)}`}
                  >
                    {item.category}
                  </span>

                  <p className="text-sm text-zinc-500 mt-3">
                    {item.createdAt}
                  </p>

                </div>

                <div className="flex items-center gap-5">

                  <p className="text-green-400 font-bold text-lg">
                    ₹ {item.amount}
                  </p>

                  <button
                    onClick={() =>
                      handleDelete(item.id)
                    }
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
}

export default Expenses;