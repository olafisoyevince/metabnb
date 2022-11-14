import Layout from "../Layout";
import headerImage from "../../assets/images/header-image.png";

const Header = () => {
  return (
    <Layout>
      <div className="md:flex md:gap-14 lg:px-9 md:justify-between md:items-center lg:items-center xl:items-center lg:justify-between xl:px-0 xl:justify-between">
        <div className=" md:w-5/12 lg:w-2/5 xl:w-3/5 xl:max-w-[646px] 2xl:w-1/2">
          <h1 className=" md:text-3xl text-4xl lg:text-4xl xl:text-5xl xl:leading-normal text-faintGray leading-snug">
            Rent a <span className="font-semibold text-primary">Place</span>{" "}
            away from <span className="font-semibold text-primary">Home</span>{" "}
            in the <span className="font-semibold text-primary">Metaverse</span>
          </h1>
          <p className=" md:text-sm lg:text-base xl:text-2xl py-3 xl:py-4 ">
            We provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>

          <div className=" mt-3 flex h-11 xl:w-11/12">
            <input
              className=" p-5 w-2/3 text-lightGray border-solid border border-lightGray border-r-0 rounded-l-lg focus:border-none focus:ring-1 focus:ring-lightGray focus:outline-none"
              type="text"
              placeholder="Search for location"
            />

            <button className=" h-full w-1/3 text-white bg-primary px-5 rounded-r-lg">
              Search
            </button>
          </div>
        </div>

        <div className="md:w-5/12 lg:w-2/5 xl:w-2/5 xl:max-w-[476px] 2xl:w-1/2 mt-8">
          <img className="w-full" src={headerImage} alt="" />
        </div>
      </div>
    </Layout>
  );
};

export default Header;
