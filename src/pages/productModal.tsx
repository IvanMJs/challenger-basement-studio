import Image from "next/image";

import { Product } from "../product/types";
import { Key } from "react";

interface Props {
  setCart: any;
  cart: any;
  size: string;
}

const ProductModal = ({ setCart, cart }: Props) => {
  return (
    <>
      <div className="text-center px-4">
        {cart.map((products: Product, index: Key | null | undefined) => (
          <div
            key={index}
            className=" 
            p-1 mb-2 
            flex justify-between 
            font-bold 
            pointer cursor-pointer 
            border-[1px] 
            p-4 sm:gap-6
            "
          >
            <Image src={products.image} width={100} height={100} alt="" />
            <div>
              <div
                className="grid mr-auto"
                onClick={() =>
                  setCart((cart: any[]) =>
                    cart.filter((_, _index) => index !== _index)
                  )
                }
              >
                <div className="grid mr-auto">
                  <text>{products?.name}</text>
                  <text className="text-slate-500 text-sm">
                    {products.description}
                  </text>
                </div>
              </div>
              <div className="mt-8">
                <text>
                  SIZE:{" "}
                  {products.options[0].values.map((size, i) => (
                    <button
                      key={i}
                      className={`
                    h-[1.6rem] 
                    w-[1.6rem] 
                    pt-1 pr-[1px]
                     text-[0.8rem] 
                     sm:h-[2rem] 
                     sm:w-[2rem]
                     `}
                    >
                      {size}
                    </button>
                  ))}
                </text>
                <text>${products?.price}</text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductModal;
