import { useQuery } from "@tanstack/react-query";
import { AdminData, GetAdminData } from "../../services/users";

const TableAdmin = () => {
  const { data } = useQuery<AdminData[]>({
    queryKey: ["admin"],
    queryFn: GetAdminData,
  });

  return (
    <table className="w-5/6 mx-auto text-sm">
      <thead>
        <tr className="">
          <th className="border px-4 text-sm py-2">Id</th>
          <th className="border px-4 text-sm py-2">username</th>
          <th className="border px-4 text-sm py-2">role</th>
        </tr>
      </thead>

      {data && (
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.username}</td>
                <td className="border px-4 py-2">{item.role}</td>
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
};

export default TableAdmin;
