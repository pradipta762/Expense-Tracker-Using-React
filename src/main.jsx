import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AddMoney from "./Components/AddMoney.jsx";
import AddExpense from "./Components/AddExpense.jsx";
import TransactionHistory from "./Components/TransactionHistory.jsx";
import Home from "./Components/Home.jsx";
import { TransactionProvider } from "./Context/TransactionContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="addMoney" element={<AddMoney />} />
      <Route path="addExpense" element={<AddExpense />} />
      <Route path="transaction-history" element={<TransactionHistory />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TransactionProvider>
      <RouterProvider router={router} />
    </TransactionProvider>
  </StrictMode>
);
