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
    console.log(error);
  }
};
