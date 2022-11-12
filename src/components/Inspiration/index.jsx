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
];

const Inspiration = () => {
  return (
    <Layout>
      <h1 className=" mt-14 mb-11 text-4xl md:text-5xl text-center font-bold">
        Inspiration for your next adventure
      </h1>

      <div className=" mb-12 flex flex-col items-center md:flex-row gap-7 md:flex-wrap md:justify-center ">
        {data.map((item, i) => {
          return <Card key={i} image={item.image} />;
        })}
      </div>
    </Layout>
  );
};

export default Inspiration;
