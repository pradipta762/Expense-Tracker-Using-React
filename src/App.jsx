import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <Header />
      <div className="bg-white/30 backdrop-blur-lg shadow-xl rounded-2xl p-6 w-80 mx-auto text-center border border-white/40">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
