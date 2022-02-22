import type { NextPage } from "next";
import { Product } from "../product/types";
import yourCart from "../public/assets/cart/yourCart.png";
import Image from "next/image";
import { Key } from "react";
import ProductModal from "./productModal";
import closeImage from "../public/assets/cart/closeCart.png";
interface Props {
  products: Product[];
  setCart: any;
  cart: any;
  total: any;
  setShowModal: any;
}

const Modal = ({ products: [], setCart, cart, total, setShowModal }: Props) => {
  const size = cart.size;
  return (
    <>
      <div className="fixed inset-4 z-50 table ml-auto">
        <div className=" flex flex-col h-3/5 border-2 bg-black ">
          <button
            className="px-4 py-2 ml-auto text-white background-transparent font-bold text-xl"
            type="button"
            onClick={() => setShowModal(false)}
          >
            <Image src={closeImage} alt="" width="100" height="20" />
          </button>
          <div className="px-4 ">
            <Image alt="yourCart" src={yourCart} />
          </div>
          <ProductModal setCart={setCart} cart={cart} size={size} />
          <div className="flex justify-between border-t-2 mt-auto font-bold divide-x-2 px-2">
            <text>TOTAL: ${total} </text>
            <button>CHECKOUT: ${100} </button>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
};

export default Modal;
