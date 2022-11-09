import Image from "next/image";
import Layout from "../components/Layout";
import { ProductType } from "../types";
import { useProduct } from "../utils";

interface CartProps {
  isOpen: boolean;
  products: ProductType[];
}
const Cart: React.FC<CartProps> = ({ isOpen }) => {
  const { products, isLoading, isError } = useProduct(10);
  const totalCount = products?.length;
  const totalPrice = products?.reduce((prev, curr) => prev + curr.price, 0);
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <Layout title="Cart" totalCount={totalCount}>
      <div className="m-8 flex sm:flex-col md:flex-row gap-8 flex-start">
        <div className="p-8 bg-white shadow-2xl rounded-sm md:w-3/4 sm:w-full">
          <div className="flex justify-between border-b-[1px] border-b-gray-200 py-4">
            <h1 className="text-2xl text-gray-400">Shopping Cart</h1>
            <p>Price</p>
          </div>
          <ul className="">
            {products.map((product) => (
              <li
                key={product.id}
                className="py-8 border-b-[1px] border-b-gray-200"
              >
                <div className="flex justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="grid place-items-center rounded-md bg-white shadow-md p-4">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width="32"
                        height="32"
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-gray-500 text-lg">{product.title}</p>
                      <p>{product.description}</p>
                      <p>{product.category}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 items-center justify-end">
                    <p>${product.price}</p>
                    <Image
                      className="cursor-pointer"
                      src="/images/trash.svg"
                      alt="trash icon"
                      width="16"
                      height="16"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid place-items-center gap-4 bg-white shadow-md w-1/4 h-1/4 p-8">
          <p className="place-self-start text-lg">
            Subtotal {`(${totalCount} items): $${totalPrice}`}
          </p>
          <button className="py-[0.8em] px-[1.5em] bg-[#ff7d1a] rounded-md text-white hover:bg-[#ff7d19]">
            Proceed to checkout
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
