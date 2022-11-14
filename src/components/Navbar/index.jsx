import Logo from "../../assets/images/Logo.png";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";
import Layout from "../Layout";
import Modal from "../Modal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Layout>
        <Modal isVisible={showModal} onClose={() => setShowModal(!showModal)} />
        {/* Mobile Nav */}
        <div
          className={`${
            open ? "-translate-y-0" : "-translate-y-full"
          } absolute top-0 left-0 w-screen bg-white p-7 transition-all duration-300 ease-in-out filter`}
        >
          <div className="flex justify-end">
            <HiOutlineXMark
              onClick={() => setOpen(!open)}
              className="md:hidden text-3xl"
            />
          </div>

          <div className="text-center" onClick={() => setOpen(!open)}>
            <div className=" cursor-pointer my-6">
              <Link to="/">Home</Link>
            </div>
            <div className=" cursor-pointer my-6">
              <Link to="/placetostay">Place to stay</Link>
            </div>
            <div className=" cursor-pointer my-6">
              <a>NFTs</a>
            </div>
            <div className=" cursor-pointer my-6">
              <a>Community</a>
            </div>
            <div className=" cursor-pointer my-6">
              <button
                onClick={() => setShowModal(!showModal)}
                className="bg-gradient-to-r from-primary to-primary py-3 px-6 text-white rounded-lg"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>

        {/* Nav for other screens */}

        <div className="py-10 flex md:text-sm justify-between items-center">
          <Link to="/">
            <img className=" w-28 md:w-36 lg:w-52 " src={Logo} />
          </Link>

          <HiBars3BottomRight
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl"
          />

          <div className="hidden md:flex md:gap-7 text-faintGray lg:gap-12 lg:text-lg ">
            <Link to="/">Home</Link>
            <Link to="/placetostay">Place to stay</Link>
            <a href="">NFTs</a>
            <a href="">Community</a>
          </div>

          <button
            onClick={() => setShowModal(!showModal)}
            className=" hidden md:block bg-gradient-to-r from-primary to-primary py-3 px-6 md:px-4 text-white rounded-lg"
          >
            Connect Wallet
          </button>
        </div>
      </Layout>
    </>
  );
};

export default Navbar;
