import { useQuery } from "@tanstack/react-query";
import { GetAllProducts, Products } from "../services/products";
import NavBar from "../components/ui/NavBar";
import TableProducts from "../components/ui/TableProducts";
import PaginationButton from "../components/ui/PaginationButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const { data } = useQuery<Products[]>({
    queryKey: ["products"],
    queryFn: GetAllProducts,
  });

  const navigate = useNavigate();

  const [pagData, setPagData] = useState<{
    totalPage: number;
    pageActive: number;
  }>({
    pageActive: 1,
    totalPage: 1,
  });

  useEffect(() => {
    if (data)
      setPagData((state) => {
        return { ...state, totalPage: Math.floor(data?.length / 10) };
      });
  }, []);

  return (
    <div className="h-[95vh] flex-shrink flex gap-5 mx-10 mt-5">
      <NavBar />
      <div className="w-3/4">
        <button
          className="bg-green-700 my-4 ml-24 rounded px-3 py-2 hover:bg-green-700/90 text-white text-sm"
          onClick={() => {
            navigate("/prodmanage");
          }}
        >
          Add Product
        </button>
        <TableProducts page={pagData.pageActive} />
        <PaginationButton
          pageActive={pagData.pageActive}
          totalPage={pagData.totalPage}
          setPageActive={setPagData}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
