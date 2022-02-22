import { useMemo, useState } from "react";

import type { GetStaticProps, NextPage } from "next";

import { Product } from "../product/types";
import Modal from "../components/modal";
import Header from "../components/header";
import Footer from "../components/footer";
import Navbar from "../components/navBar";
import Products from "../components/products";

export const getStaticProps: GetStaticProps = async () => {
  const products:
    | Product[]
    | {
        id: string;
        image: string;
        price: number;
        name: string;
        description: string;
        options: { label: string; values: string[] }[];
      }[]
    | undefined = await import("../product/mock.json").then(
    (res) => res.default
  );

  return {
    props: {
      products,
    },
  };
};

interface Props {
  products: Product[];
}

const Home: NextPage<Props> = ({ products }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const total = useMemo(
    () => cart.reduce((total, product) => total + product.price, 0),
    [cart]
  );

  return (
    <>
      <Navbar cart={cart} setShowModal={setShowModal} />
      <Header />
      <Products products={products} setCart={setCart} cart={cart} />
      <Footer />

      {showModal ? (
        <>
          <Modal
            products={products}
            setCart={setCart}
            total={total}
            cart={cart}
            setShowModal={setShowModal}
          />
        </>
      ) : null}
    </>
  );
};

export default Home;
