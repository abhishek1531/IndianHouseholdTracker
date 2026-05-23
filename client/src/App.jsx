import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public Routes */}

        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/login"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          }
        />

        <Route
          path="/register"
          element={
            <MainLayout>
              <Register />
            </MainLayout>
          }
        />

        {/* Dashboard Routes */}

        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />

        <Route
          path="/expenses"
          element={
            <DashboardLayout>
              <Expenses />
            </DashboardLayout>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;