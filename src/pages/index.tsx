import { useMemo, useState } from "react";

import type { GetStaticProps, NextPage } from "next";

import { Product } from "../product/types";
import Modal from "../components/modal";
import Header from "./header";
import Footer from "./footer";
import Navbar from "./navBar";
import Products from "./products";

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = await import("../product/mock.json").then(
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
