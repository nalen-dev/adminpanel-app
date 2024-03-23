import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { LoginAdmin } from "../../services/users";
import FormErrorMsg from "../ui/FormErrorMsg";
import FormSuccessMsg from "../ui/FormSuccessMsg";
import { redirect, useNavigate } from "react-router-dom";

interface LoginForm {
  username: string;
  password: string;
}

const LoginForm = () => {
  const [formInputs, setFormInputs] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const { mutate, isError } = useMutation({
    mutationFn: LoginAdmin,
    onError: handleError,
    onSuccess: handleSucces,
  });

  function handleSucces() {
    setErrMsg("");
    setSuccessMsg("welcome back!");
    navigate("/dashboard");
  }

  function handleError(err: Error) {
    console.log(err);
    switch (err.message) {
      case "400":
        setErrMsg("Invalid Input");
        break;
      case "403":
        setErrMsg("Wrong Password");
        break;
      case "404":
        setErrMsg("Username Not Found");
        break;
      default:
        setErrMsg("something wrong");
        break;
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({
      username: formInputs.username,
      password: formInputs.password,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormInputs((state) => {
      return { ...state, [name]: value };
    });
  };

  return (
    <form className="flex flex-col gap-5 mb-5" onSubmit={handleSubmit}>
      {isError ? <FormErrorMsg msg={errMsg} /> : <div></div>}
      {successMsg.length > 0 ? <FormSuccessMsg msg={successMsg} /> : <></>}

      <div className="w-4/5 mx-auto">
        <div className="text-left mb-1">Username</div>
        <input
          name="username"
          type="text"
          className="border-2 px-4 w-full rounded  py-2"
          placeholder="admin"
          onChange={handleInputChange}
        />
      </div>
      <div className="w-4/5 mx-auto">
        <div className="text-left mb-1">Password</div>
        <input
          name="password"
          type="password"
          className="border-2 w-full px-4 rounded py-2"
          placeholder="*******"
          onChange={handleInputChange}
        />
      </div>

      <button
        type="submit"
        className="border w-4/5 mx-auto py-[6px] rounded bg-indigo-950 text-white"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
