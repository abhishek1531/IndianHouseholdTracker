import {
  createContext,
  useState,
  useEffect,
  useRef,
} from "react";

export const ExpenseContext =
  createContext();

function ExpenseProvider({ children }) {

  const [expenses, setExpenses] =
    useState([]);

  const isFirstRender =
    useRef(true);

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

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        setExpenses,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;