import React, { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

function Header() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800">Expense Tracker</h1>
    </div>
  );
}

export default Header;
