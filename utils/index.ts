import useSWR from "swr";
import { ProductType } from "../types";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface up {
  products: ProductType[];
  isLoading: boolean;
  isError: any;
}

export function useProduct(limit: number): up {
  const { data, error } = useSWR(
    `https://fakestoreapi.com/products?limit=${limit}`,
    fetcher
  );

  console.log("$$: ", data);
  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}
