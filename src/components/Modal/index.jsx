import { IoIosClose, IoIosArrowForward } from "react-icons/io";
import metamask from "../../assets/images/metamask.png";
import walletconnect from "../../assets/images/walletconnect.png";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
      onClick={() => onClose()}
    >
      <div className=" w-[600px] ">
        <div className=" bg-white rounded-xl">
          <div>
            <div className="flex items-center justify-between p-6 border-b border-lightGray">
              <h1 className=" text-2xl font-bold ">Connect Wallet</h1>
              <IoIosClose onClick={() => onClose()} className=" text-4xl" />
            </div>
            <div className="p-8">
              <p>Choose your preffered wallet</p>
              <div className="">
                <div className="flex mt-4 justify-between items-center py-4 px-3 border border-lightGray rounded-xl">
                  <div className="flex items-center gap-4">
                    <img src={metamask} alt="" />
                    <h1 className="text-xl font-bold">Metamask</h1>
                  </div>
                  <IoIosArrowForward className=" text-3xl text-lightGray" />
                </div>

                <div className="flex mt-4 justify-between items-center py-4 px-3 border border-lightGray rounded-xl">
                  <div className="flex items-center gap-4">
                    <img src={walletconnect} alt="" />
                    <h1 className="text-xl font-bold">WalletConnect</h1>
                  </div>
                  <IoIosArrowForward className=" text-3xl text-lightGray" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
