import Layout from "../Layout";
import headerImage from "../../assets/header-image.png";

const Header = () => {
  return (
    <Layout>
      <div className="md:flex md:gap-14">
        <div className=" md:w-7/12 lg:w-3/5 lg:mt-14">
          <h1 className=" text-4xl text-faintGray leading-snug">
            Rent a <span className="font-semibold text-primary">Place</span>{" "}
            away from <span className="font-semibold text-primary">Home</span>{" "}
            in the <span className="font-semibold text-primary">Metaverse</span>
          </h1>
          <p className=" py-3">
            We provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>

          <div className=" mt-3 flex h-11">
            <input
              className=" p-5 w-2/3 text-lightGray border-solid border border-lightGray border-r-0 rounded-l-lg focus:border-none focus:ring-1 focus:ring-lightGray focus:outline-none"
              type="text"
              placeholder="Search for location"
            />

            <button className=" h-full w-1/3 bg-primary px-5 rounded-r-lg">
              Search
            </button>
          </div>
        </div>

        <div className="md:w-5/12 lg:w-3/5 mt-8">
          <img className="w-full" src={headerImage} alt="" />
        </div>
      </div>
    </Layout>
  );
};

export default Header;
