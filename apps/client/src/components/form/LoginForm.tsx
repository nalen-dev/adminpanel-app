const LoginForm = () => {
  return (
    <form className="flex flex-col gap-5">
      <div className="w-4/5 mx-auto">
        <div className="text-left mb-1">Username</div>
        <input
          type="text"
          className="border-2 px-4 w-full rounded  py-2"
          placeholder="admin"
        />
      </div>
      <div className="w-4/5 mx-auto">
        <div className="text-left mb-1">Password</div>
        <input
          type="password"
          className="border-2 w-full px-4 rounded py-2"
          placeholder="*******"
        />
      </div>
    </form>
  );
};

export default LoginForm;
