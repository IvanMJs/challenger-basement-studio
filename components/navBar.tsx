import Image from "next/image";
import logo from "../public/assets/header/logo.png";
import group2 from "../public/assets/group2.png";
import useWindowSize from "../hooks/useDeviceDetect";
import deviceLogo from "../public/assets/header/deviceLogo.png";

interface Props {
  cart: any;
  setShowModal: any;
}

const Navbar = ({ setShowModal, cart }: Props) => {
  const windowSize = useWindowSize();

  return (
    <>
      <div className="flex justify-between flex flex-row p-4">
        {windowSize.width > 700 ? (
          <>
            <Image src={logo} alt="Basement-logo" />
            <Image src={group2} alt="group2" />
          </>
        ) : (
          <Image width={50} height={50} src={deviceLogo} alt="Basement-logo" />
        )}
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="border-2 
          border-white 
          hover:bg-white 
          hover:text-black 
          font-bold 
          px-4 
          rounded-full"
        >
          CART ({cart.length})
        </button>
      </div>
    </>
  );
};

export default Navbar;
