import { createContext, useContext, useState, useEffect } from "react";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [cashBalance, setCashBalance] = useState(0);
  const [upiBalance, setUpiBalance] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    if (transactions.length || cashBalance || upiBalance || totalExpense) {
      console.log("Saving to local storage", { transactions, cashBalance, upiBalance, totalExpense });
      localStorage.setItem('transactions', JSON.stringify(transactions));
      localStorage.setItem('cashBalance', JSON.stringify(cashBalance));
      localStorage.setItem('upiBalance', JSON.stringify(upiBalance));
      localStorage.setItem('totalExpense', JSON.stringify(totalExpense));
    }
  }, [transactions, cashBalance, upiBalance, totalExpense]);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const storedCashBalance = JSON.parse(localStorage.getItem('cashBalance')) || 0;
    const storedUpiBalance = JSON.parse(localStorage.getItem('upiBalance')) || 0;
    const storedTotalExpense = JSON.parse(localStorage.getItem('totalExpense')) || 0;
  
    console.log("Loading from local storage", { storedTransactions, storedCashBalance, storedUpiBalance, storedTotalExpense });

    setTransactions(storedTransactions);
    setCashBalance(storedCashBalance);
    setUpiBalance(storedUpiBalance);
    setTotalExpense(storedTotalExpense);
  }, []);
  

  // Function to add an expense
  const addExpense = (expenseFor, amount, expenseMode) => {
    const newTransaction = {
      id: Date.now(),
      type: "expense",
      text: expenseFor,
      amount: `₹${amount}`,
      mode: expenseMode
    };
    setTransactions((prev) => [newTransaction, ...prev]);

    // For updating the totalExpense value

    if(expenseMode === "Cash") {
      if(Number(amount) <= cashBalance) {
        setCashBalance((prev) => prev - Number(amount))
        setTotalExpense((prev) => prev + Number(amount))
      } else {
        alert("Not enough money")
        return;
      }
    } else {
      if(Number(amount) <= upiBalance) {
        setUpiBalance((prev) => prev - Number(amount))
        setTotalExpense((prev) => prev + Number(amount))
      } else {
        alert("Not enough money")
        return;
      }
    }

  };

  const addMoney = (amount, paymentMode) => {
    const newTransaction = {
      id: Date.now(),
      type: "income",
      text: "Money added",
      amount: `₹${amount}`,
      mode: paymentMode
    };
    setTransactions((prev) => [newTransaction, ...prev]);
    if(paymentMode === "Cash") {
      setCashBalance((prev) => prev + Number(amount))
    } else {
      setUpiBalance((prev) => prev + Number(amount))
    }
  };

  return (
    <TransactionContext.Provider value={
      { 
        transactions, 
        addExpense, 
        addMoney,
        cashBalance,
        upiBalance,
        totalExpense,
        totalBalance : cashBalance +  upiBalance
      }
    }>
      {children}
    </TransactionContext.Provider>
  );
}

export const useTransaction = () => {
  return useContext(TransactionContext);
};