import NavBar from "../components/ui/NavBar";
import TableAdmin from "../components/ui/TableAdmin";

const UserManage = () => {
  return (
    <div className="h-[95vh] flex gap-5 mx-10 mt-5">
      <NavBar />
      <div>
        <div className="my-5 text-base">Welcome, admin super!</div>
        <TableAdmin />
      </div>
    </div>
  );
};

export default UserManage;
