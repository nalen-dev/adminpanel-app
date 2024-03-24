import {
  CraeteProductForm,
  UpdateProductForm,
} from "../components/form/ProdManageForm";

export interface Products {
  id: number;
  name: string;
  stock: number;
  price: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export const GetAllProducts = async () => {
  try {
    const response = await fetch("/api/products");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const GetProductsById = async (id: number) => {
  try {
    const response = await fetch(`/api/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const GetFilterdProduct = async (page: number) => {
  try {
    const response = await fetch(`/api/products?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error("something went wrong");
  }
};

export const CreateProduct = async ({
  category,
  name,
  price,
  stock,
}: CraeteProductForm) => {
  const response = await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      category,
      name,
      price,
      stock,
    }),
  });

  if (!response.ok) {
    throw new Error(response.status.toString());
  }

  const data = await response.json();
  return data;
};

export const UpdateProduct = async ({
  id,
  category,
  name,
  price,
  stock,
}: UpdateProductForm) => {
  const response = await fetch(`/api/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      category,
      name,
      price,
      stock,
    }),
  });

  if (!response.ok) {
    throw new Error(response.status.toString());
  }

  const data = await response.json();
  return data;
};

export const DeleteProduct = async ({ id }: { id: number }) => {
  const response = await fetch(`/api/products/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(response.status.toString());
  }

  const data = await response.json();
  return data;
};
