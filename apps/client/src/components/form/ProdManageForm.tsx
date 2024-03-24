import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import {
  CreateProduct,
  DeleteProduct,
  GetProductsById,
  Products,
  UpdateProduct,
} from "../../services/products";

import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";

export interface CraeteProductForm {
  name: string | undefined;
  stock: number | undefined;
  price: number | undefined;
  category: string | undefined;
}

export interface UpdateProductForm {
  id: string | null;
  name: string | undefined;
  stock: number | undefined;
  price: number | undefined;
  category: string | undefined;
}

enum ButtonType {
  Upload = "upload",
  Delete = "delete",
  Update = "update",
}

const ProdManageForm = () => {
  const [formValue, setFormValue] = useState<CraeteProductForm>({
    name: "",
    category: "",
    price: 0,
    stock: 0,
  });

  const [_, setButtonPressed] = useState<ButtonType>();

  const [searchParams] = useSearchParams();

  const myParam = searchParams.get("id");
  const navigate = useNavigate();

  const { data } = useQuery<Products>({
    queryKey: ["products", myParam],
    queryFn: () => GetProductsById(Number(myParam)),
  });

  const { mutate: uploadData } = useMutation({
    mutationFn: CreateProduct,
    onError: handleUploadError,
    onSuccess: handleUploadSuccess,
  });
  function handleUploadError(e: Error) {
    console.log(e);
  }
  const handleUpload = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setButtonPressed(ButtonType.Upload);

    uploadData({
      name: formValue.name,
      category: formValue.category,
      price: Number(formValue.price),
      stock: Number(formValue.stock),
    });
  };

  function handleUploadSuccess() {
    toast.success(<span className="text-xs">Success Add Data</span>, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      navigate("/products");
    }, 1500);
  }

  const { mutate: updateData } = useMutation({
    mutationFn: UpdateProduct,
    onError: handleUpdateError,
    onSuccess: handleUpdateSuccess,
  });

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setButtonPressed(ButtonType.Update);
    updateData({
      id: myParam,
      name: formValue.name,
      category: formValue.category,
      price: Number(formValue.price),
      stock: Number(formValue.stock),
    });
  };

  function handleUpdateSuccess() {
    toast.success(<span className="text-xs">Success update data</span>, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      navigate("/products");
    }, 1500);
  }

  function handleUpdateError(e: Error) {
    console.log(e);
  }
  const { mutate: deleteData } = useMutation({
    mutationFn: DeleteProduct,
    onError: handleDeleteError,
    onSuccess: handleDeleteSuccess,
  });

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setButtonPressed(ButtonType.Delete);
    deleteData({ id: Number(myParam) });
  };
  function handleDeleteSuccess() {
    toast.success(<span className="text-xs">Success delete data</span>, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      navigate("/products");
    }, 1500);
  }

  function handleDeleteError(e: Error) {
    console.log(e);
  }

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValue((state) => {
      return { ...state, [name]: value };
    });
  };

  useEffect(() => {
    if (myParam) {
      setFormValue((state) => {
        return {
          ...state,
          name: data?.name,
          category: data?.category,
          price: data?.price,
          stock: data?.stock,
        };
      });
    }
  }, [data]);

  return (
    <>
      <form
        className="flex flex-col w-fit ml-24 gap-5 mt-5"
        onSubmit={handleSubmit}
      >
        <div className=" px-2 flex items-center gap-2">
          <div className="text-left text-sm w-20 mb-1">Name</div>
          <input
            name="name"
            type="text"
            className=" bg-gray-200 w-96 px-4  rounded-sm text-sm py-[6px] border"
            placeholder="product name"
            value={formValue.name || ""}
            onChange={handleInputChange}
          />
        </div>

        <div className=" px-2  flex items-center gap-2">
          <div className="text-left text-sm w-20 mb-1">Stock</div>
          <input
            name="stock"
            type="number"
            className=" bg-gray-200 w-96 px-4  rounded-sm text-sm py-[6px] border"
            placeholder="0"
            value={formValue.stock || ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="px-2 flex items-center gap-2">
          <div className="text-left text-sm w-20 mb-1">Price</div>
          <input
            name="price"
            type="number"
            className=" bg-gray-200 w-96 px-4  rounded-sm text-sm py-[6px] border"
            placeholder="0"
            value={formValue.price || ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="px-2 flex items-center gap-2">
          <div className="text-left text-sm w-20 mb-1">Category</div>
          <label className="gap-1 flex items-center">
            <input
              type="radio"
              name="category"
              checked={formValue.category == "food"}
              value="food"
              onChange={handleInputChange}
            />
            <span className="text-sm">food</span>
          </label>
          <br />
          <label className="gap-1 flex items-center">
            <input
              type="radio"
              value="drink"
              checked={formValue.category == "drink"}
              name="category"
              onChange={handleInputChange}
            />
            <span className="text-sm">drink</span>
          </label>
        </div>

        <footer className="flex w-full gap-2 justify-end">
          {myParam ? (
            <>
              <button
                type={"delete" as "submit"}
                className="border w-2/6 text-sm  py-[6px] hover:bg-red-600/90 rounded bg-red-600 text-white"
                onClick={handleDelete}
              >
                Delete
              </button>

              <button
                onClick={handleUpdate}
                type={"update" as "submit"}
                className="border w-2/6 text-sm  py-[6px]  hover:bg-indigo-950/90 rounded bg-indigo-950 text-white"
              >
                Update
              </button>
            </>
          ) : (
            <button
              type={"upload" as "submit"}
              className="border w-2/6 text-sm  py-[6px]  hover:bg-indigo-950/90 rounded bg-indigo-950 text-white"
              onClick={handleUpload}
            >
              Create
            </button>
          )}
        </footer>
      </form>
    </>
  );
};

export default ProdManageForm;
