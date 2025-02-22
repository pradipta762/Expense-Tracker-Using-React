import React from "react";
import Balance from "./Balance";
import Income from "./Income";
import AddButtons from "./AddButtons";
import Expense from "./Expense";

function Home() {
  return (
    <div>
      <Balance />
      <Income />
      <Expense />
      <AddButtons />
    </div>
  );
}

export default Home;
