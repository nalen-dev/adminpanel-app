import NavBar from "../components/ui/NavBar";
import TableProducts from "../components/ui/TableProducts";

const ProductsPage = () => {
  return (
    <div className="h-[95vh] flex-shrink flex gap-5 mx-10 mt-5">
      <NavBar />
      <div className="w-3/4 border">
        <TableProducts />
      </div>
    </div>
  );
};

export default ProductsPage;
