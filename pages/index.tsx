import Head from "next/head";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import useSWR, { SWRHook } from "swr";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { ProductType } from "../types";
import { fetcher, useProduct } from "../utils";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Layout title="Sokosq">
      <div className="grid grid-cols-2 place-items-center  gap-16 mx-auto py-[5em] px-[8em]">
        <div className="">
          <img
            className="w-full h-full object-cover"
            src="/images/image-product-1.jpg"
            alt="image"
          />
        </div>
        <div className="flow">
          <span className="text-[0.875rem] text-[#ff7d1a] uppercase font-bold">
            Sneaker Company
          </span>
          <h1 className="text-[2rem] text-black font-extrabold fs-600 letter-spacing-3">
            Fall Limited Edition <span className="block">Sneakers</span>
          </h1>
          <p className="text-[#848b95]">
            These low-profile sneakers are your perfect casual wear <br />
            companion. Featuring a durable rubber outer sole, they’ll <br />
            withstand everything the weather can offer.
          </p>
          <div className="flex price-group">
            <div className="flex price">
              <h2 className="text-dark text-[1.75rem] font-bold">$125.00</h2>
              <span className="fs-200 text-accent bg-accent">-50%</span>
            </div>

            <h3 className="fs-300 text-gray-400">$250.00</h3>
          </div>
          <div className="flex justify-between">
            <div className="py-[0.8em] px-[1.5em] bg-[#ff7d1a] rounded-md text-white hover:bg-[#ff7d19] w-full text-center">
              <a href="#" className="text-light">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
