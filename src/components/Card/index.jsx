import star from "../../assets/images/star.png";

const Card = ({ image }) => {
  return (
    <div>
      <div className=" p-4 border-solid border border-lightGray w-72 rounded-3xl ">
        <div className="">
          <img
            className=" w-full  border-solid border-1 border-lightGray  "
            src={image}
            alt=""
          />
        </div>

        <div className="flex justify-between pt-4 pb-3">
          <p>Desert king</p>
          <p className=" font-semibold">1MBT per night</p>
        </div>

        <div className="flex justify-between text-xs pb-3">
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>

        <div className=" w-12 flex gap-1 ">
          <img className="" src={star} alt="" />
          <img className="" src={star} alt="" />
          <img className="" src={star} alt="" />
          <img className="" src={star} alt="" />
          <img className="" src={star} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
