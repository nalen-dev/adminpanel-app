import { useQuery } from "@tanstack/react-query";
import NavBar from "../components/ui/NavBar";
import { GetAllProducts, Products } from "../services/products";

const Dashboard = () => {
  const { data } = useQuery<Products[]>({
    queryKey: ["products"],
    queryFn: GetAllProducts,
  });

  console.log(data);

  return (
    <div className="h-[95vh] flex gap-5 mx-10 mt-5">
      <NavBar />
      <div>
        <div className="bg-green-600 text-white px-3 py-1 rounded">
          Total Product {data?.length}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
