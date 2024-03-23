import LoginCard from "../components/ui/LoginCard";

const LoginPage = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="h-screen max-w-6xl mx-auto flex flex-col justify-center ">
        <LoginCard />
      </div>
    </div>
  );
};

export default LoginPage;
