import type { NextPage } from "next";
import Image from "next/image";
import { useMemo, useState } from "react";
import InputSearch from "./inputSearch";
import { Product } from "../product/types";
import addToCar from "../public/assets/productCart/add-to-cart.png";

interface Props {
  products: Product[];
  setCart: any;
  cart: any;
}

const Products: NextPage<Props> = ({ products, setCart }: Props) => {
  const [search, setSearch] = useState("");
  
  const filteredProduct = useMemo(
    () =>
      products.filter((ep) => {
        const product = ep.name.toLowerCase().includes(search.toLowerCase());
        return product;
      }),
    [products, search]
  );

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <InputSearch search={search} handleSearch={handleSearch} />
      <div
        className="
        justify-items-center 
        p-4 max-w-5x1
        grid  
        gap-3 
        xs:grid-cols-2 
        xs:p-8 
        md:grid-cols-3 
        hover:bg-black"
      >
        {filteredProduct.map((product) => (
          <div key={product.id}>
            <div
              className={`bg-gradient-to-t from-neutral-900
              justify-center 
              items-center 
              hover:opacity-80`}
            >
              <div
                onClick={() => setCart((cart: any) => cart.concat(product))}
                className="
                cursor-pointer
                relative group"
              >
                <div
                  className="absolute 
                p-6 text-2xl 
                transition-opacity 
                transform 
                -translate-y-1/2 
                opacity-0 top-1/2 
                group-hover:opacity-100"
                >
                  <Image
                    src={addToCar}
                    alt="addToCar"
                    width={200}
                    height={200}
                  />
                </div>
                <div
                  className="group-hover:invisible"
                >
                  <Image
                    layout="fixed"
                    src={product.image}
                    alt={product.name}
                    width={245}
                    height={300}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between text-white border-t-2">
              <text>{product.name}</text>
              <text>${product.price}</text>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
