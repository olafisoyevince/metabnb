import mbtoken from "../../assets/images/mbtoken.svg";
import metamask from "../../assets/images/metamask.svg";
import opensea from "../../assets/images/opensea.svg";

const Endorsed = () => {
  return (
    <div>
      <div className="flex flex-col mt-16 py-3 md:py-1 md:flex-row md:justify-evenly items-center bg-primary">
        <div className=" my-3 md:my:0">
          <img className="" src={mbtoken} alt="" />
        </div>
        <div className=" my-3 md:my:0">
          <img src={metamask} alt="" />
        </div>
        <div className=" my-3 md:my:0">
          <img src={opensea} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Endorsed;
