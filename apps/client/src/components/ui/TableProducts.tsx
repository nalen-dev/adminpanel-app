import { useQuery } from "@tanstack/react-query";
import { GetFilterdProduct, Products } from "../../services/products";

interface TableProductsProps {
  page: number;
}

const TableProducts = ({ page }: TableProductsProps) => {
  const { data } = useQuery<Products[]>({
    queryKey: ["products", page],
    queryFn: () => GetFilterdProduct(page),
  });
  return (
    <table className="w-5/6 mx-auto">
      <thead>
        <tr className="">
          <th className="border px-4 py-2">Id</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Category</th>
          <th className="border px-4 py-2">Stock</th>
          <th className="border px-4 py-2">Price</th>
          <th className="border px-4 py-2">Edit</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.category}</td>
              <td className="border px-4 py-2">{item.stock}</td>
              <td className="border px-4 py-2 text-right">
                {item.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </td>
              <td className="border px-4 py-2">edit</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableProducts;
