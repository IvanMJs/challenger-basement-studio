import Image from "next/image";
import footer from "../public/assets/footer/footer.png";

const Footer = () => {
  return (
    <>
      <div className="py-2 text-center">
        <Image src={footer} alt="footer" />
      </div>
    </>
  );
};

export default Footer;
