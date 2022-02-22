import Image from "next/image";
import group from "../assets/group.png";
import header from "../assets/header/header.png";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <>
      <div className="py-2 text-center">
        <Image src={header} alt="header" />
        <div
          className="
        z-20
        relative
        flex
        "
        >
          <Image src={group} alt="group" />
        </div>
        <Marquee gradient={false} className="border-t-2 border-b-2">
          <h4 className="text-white">
            A man can’t have enough base­ment swag  —  A man can’t have enough
            base­ment swag
          </h4>
          text.
        </Marquee>
        <div
          className="
          z-20
          block
          reltive
          ml-96
        "
        >
          <Image src={group} alt="group" />
        </div>

        <div className="flex place-content-center z-40"></div>
      </div>
    </>
  );
};

export default Header;
