import threeImg from "../../assets/images/three-img.png";
import Layout from "../Layout";

const MetaBnbNFTs = () => {
  return (
    <div className="bg-primary py-24">
      <Layout>
        <div className="md:flex md:gap-14 ">
          <div className=" md:w-1/2 lg:w-3/5 lg:mt-14">
            <h1 className=" text-4xl md:text-4xl text-white font-semibold leading-snug">
              Metabnb NFTs
            </h1>
            <p className=" py-9 max-w-md md:max-w-lg text-white">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button className=" bg-white md:px-3 px-5 py-3 text-primary rounded-md">
              Learn more
            </button>
          </div>

          <div className="md:w-1/2 lg:w-3/5 mt-8">
            <img className="w-full" src={threeImg} alt="" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default MetaBnbNFTs;
