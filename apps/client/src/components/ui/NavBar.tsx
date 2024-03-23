import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const [path, setPath] = useState<string>("");

  useEffect(() => {
    setPath(location.pathname);
  }, []);

  return (
    <div className="w-52 flex flex-col justify-between pb-10 px-3 py-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950 to-indigo-950 rounded">
      <div className="flex flex-col gap-3">
        <Link to="/dashboard">
          <div
            className={` text-white px-2 py-1 rounded-sm cursor-pointer ${path == "/dashboard" ? "bg-white font-semibold hover:bg-none  text-indigo-950" : "hover:bg-sky-800"}`}
          >
            Dashboard
          </div>
        </Link>
        <Link to="/products">
          <div
            className={` text-white px-2 py-1 rounded-sm cursor-pointer ${path == "/products" ? "bg-white font-semibold hover:bg-none  text-indigo-950" : "hover:bg-sky-800"}`}
          >
            Products
          </div>
        </Link>

        <Link to="/usermanage">
          <div
            className={` text-white px-2 py-1 rounded-sm cursor-pointer ${path == "/usermanage" ? "bg-white font-semibold hover:bg-none  text-indigo-950" : "hover:bg-sky-800"}`}
          >
            User Management
          </div>
        </Link>
      </div>

      <button className="text-white bg-red-800 hover:bg-red-900 px-2 py-1 rounded-sm cursor-pointer w-full text-left">
        Logout
      </button>
    </div>
  );
};

export default NavBar;
