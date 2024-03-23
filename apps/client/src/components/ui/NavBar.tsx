import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const NavBar = () => {
  const location = useLocation();
  const [path, setPath] = useState<string>("");
  const navigate = useNavigate();

  const myCookieValue: string | undefined = Cookies.get("role");

  useEffect(() => {
    setPath(location.pathname);
    if (myCookieValue == undefined) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("role");
    navigate("/login");
  };

  return (
    <div className="w-52 flex flex-col justify-between pb-10 px-3 py-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950 to-indigo-950 rounded">
      <div className="flex flex-col gap-3">
        <Link to="/dashboard">
          <div
            className={` px-2 py-1 rounded-sm cursor-pointer ${path == "/dashboard" ? "bg-white font-semibold hover:bg-none  text-indigo-950" : "hover:bg-sky-800 text-white"}`}
          >
            Dashboard
          </div>
        </Link>
        <Link to="/products">
          <div
            className={` px-2 py-1 rounded-sm cursor-pointer ${path == "/products" ? "bg-white font-semibold hover:bg-none  text-indigo-950" : "hover:bg-sky-800 text-white"}`}
          >
            Products
          </div>
        </Link>

        {myCookieValue == "super" && (
          <Link to="/usermanage">
            <div
              className={` px-2 py-1 rounded-sm cursor-pointer ${path == "/usermanage" ? "bg-white font-semibold hover:bg-none  text-indigo-950" : "hover:bg-sky-800 text-white"}`}
            >
              User Management
            </div>
          </Link>
        )}
      </div>

      <button
        className="text-white bg-red-800 hover:bg-red-900 px-2 py-1 rounded-sm cursor-pointer w-full text-left hover:bg-red-800/90"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default NavBar;
