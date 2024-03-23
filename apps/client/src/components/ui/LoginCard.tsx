import Cookies from "js-cookie";
import LoginForm from "../form/LoginForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
  const cookies = Cookies.get("role");

  const navigate = useNavigate();

  useEffect(() => {
    if (cookies) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="">
      <div className="border text-center py-7 px-7 max-w-96 sm:max-w-xl bg-white rounded-md mx-auto ">
        <header className="text-center text-2xl font-bold mb-1 ">
          Admin Login
        </header>
        <div className="text-gray-400">welcome, back!</div>
        <div className="mt-2">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
