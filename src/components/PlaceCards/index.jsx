import settings from "../../assets/images/setting-5.svg";
import Layout from "../Layout";

import Card from "../Card";

import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";
import three from "../../assets/images/3.png";
import four from "../../assets/images/4.png";
import five from "../../assets/images/5.png";
import six from "../../assets/images/6.png";
import seven from "../../assets/images/7.png";
import eight from "../../assets/images/8.png";

const data = [
  {
    image: one,
  },
  {
    image: two,
  },
  {
    image: three,
  },
  {
    image: four,
  },
  {
    image: five,
  },
  {
    image: six,
  },
  {
    image: seven,
  },
  {
    image: eight,
  },
  {
    image: one,
  },
  {
    image: two,
  },
  {
    image: three,
  },
  {
    image: four,
  },
  {
    image: five,
  },
  {
    image: six,
  },
  {
    image: seven,
  },
  {
    image: eight,
  },
];

const PlaceCards = () => {
  return (
    <Layout>
      <div className="flex justify-between flex-wrap items-center pt-7 pb-12 gap-6 lg:px-9 xl:px-0">
        <p>Resturant</p>
        <p>Cottage</p>
        <p>Castle</p>
        <p>Fantasy City</p>
        <p>Beach</p>
        <p>Cabins</p>
        <p>Off-grid</p>
        <p>Farm</p>

        <button className=" flex gap-3 border border-lightGray px-2 py-2 rounded-lg">
          <span>Location</span>
          <img src={settings} alt="" />
        </button>
      </div>

      <div className=" mb-12 flex flex-col items-center md:flex-row gap-7 md:flex-wrap md:justify-center ">
        {data.map((item, i) => {
          return <Card key={i} image={item.image} />;
        })}
      </div>
    </Layout>
  );
};

export default PlaceCards;
