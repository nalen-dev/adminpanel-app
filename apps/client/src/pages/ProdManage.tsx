import { useNavigate } from "react-router-dom";
import NavBar from "../components/ui/NavBar";
import ProdManageForm from "../components/form/ProdManageForm";
import Cookies from "js-cookie";
import { useEffect } from "react";

const ProdManage = () => {
  const navigate = useNavigate();
  const cookies = Cookies.get("role");

  useEffect(() => {
    if (cookies == "main") {
      navigate("/dashboard");
    }
  });

  return (
    <div className="h-[95vh] flex-shrink flex gap-5 mx-10 mt-5">
      <NavBar />
      <div className="w-3/4">
        <button
          className="bg-gray-400 my-4 ml-24 rounded px-3 py-2 hover:bg-gray-400/90 text-white text-sm"
          onClick={() => {
            navigate("/products");
          }}
        >
          Back
        </button>
        <ProdManageForm />
      </div>
    </div>
  );
};

export default ProdManage;
