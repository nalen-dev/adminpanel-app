import LoginForm from "../form/LoginForm";

const LoginCard = () => {
  return (
    <div className="">
      <div className="border text-center py-7 px-7 max-w-96 sm:max-w-xl bg-white rounded-md mx-auto ">
        <header className="text-center text-2xl font-bold mb-1 ">
          Admin Login
        </header>
        <div className="text-gray-400">welcome, back!</div>
        <div className="mt-5">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
