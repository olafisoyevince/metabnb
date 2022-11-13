import Layout from "../Layout";
import whiteLogo from "../../assets/images/white-logo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white pt-16 pb-16 ">
      <Layout>
        <div className="md:flex md:justify-between">
          <div>
            <img className="mx-auto md:mx-0" src={whiteLogo} alt="" />

            <div className=" flex justify-center md:justify-start gap-6 pt-24">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>

          <div className=" pt-9 text-center md:text-left md:pt-0">
            <h1 className=" font-bold">Community</h1>
            <div className=" text-sm ">
              <p className=" pt-6">NFTs</p>
              <p className=" pt-4">Tokens</p>
              <p className=" pt-4">Landlords</p>
              <p className=" pt-4">Discord</p>
            </div>
          </div>

          <div className=" pt-9 text-center md:text-left md:pt-0">
            <h1 className=" font-bold">Places</h1>
            <div className=" text-sm ">
              <p className=" pt-6">Castle</p>
              <p className=" pt-4">Farms</p>
              <p className=" pt-4">Beach</p>
              <p className=" pt-4">Learn more</p>
            </div>
          </div>

          <div className=" pt-9 text-center md:text-left md:pt-0">
            <h1 className=" font-bold">About us</h1>
            <div className=" text-sm ">
              <p className=" pt-6">Road map</p>
              <p className=" pt-4">Creators</p>
              <p className=" pt-4">Career</p>
              <p className=" pt-4">Contact us</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-5 justify-center md:justify-start">
          <FaRegCopyright />
          <p>2022 Metabnb</p>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
