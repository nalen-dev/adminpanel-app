import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    console.log(location);
    if (location.pathname == "/") {
      navigate("/login");
    }
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="mx-auto my-auto  w-fit text-2xl">
        <div className="mb-2">404: page not found</div>
        <div className="text-sm mx-auto">
          Back to{" "}
          <span
            className="text-blue-500 cursor-pointer hover:text-blue-500/90"
            onClick={() => {
              navigate("/login");
            }}
          >
            login
          </span>{" "}
          page
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
