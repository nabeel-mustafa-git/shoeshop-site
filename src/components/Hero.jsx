import { shoes, statistics } from "../constants";
import Button from "../components/Button";
import shoe1 from "../assests/images/shoe-1.png";
import ShoeCard from "./ShoeCard";
import arrow from "../assests/icons/arrow.png";

import { useState } from "react";

const Hero = () => {
  const [shoeImg, setShoeImg] = useState(shoe1);

  return (
    <>
      <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="text-lg text-main-color">Our Summer Collection</p>
          <h1 className="mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
            <br />
            <span className="text-main-color inline-block mt-3">Top </span> Shoes
          </h1>
          <p className="text-slate-gray text-lg  leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Shoe arrivals, quality comfort and innovation for your active life.
          </p>
          <Button lable="Shop Now" imgURL={arrow} />
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat) => (
              <div>
                <p className="text-4xl font-bold">{stat.stat}</p>
                <p className="leading-7 text-slate-gray">{stat.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-cover bg-hero">
          <img src={shoeImg} className="object-contain relative z-10 p-10" alt="shoe Collection" width={610}></img>
          <div className="flex sm:gap-3 gap-2 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe) => (
              <ShoeCard imgURL={shoe.shoeURL} changeShoeImg={(newShoe) => setShoeImg(newShoe)} bigShoeImg={shoeImg} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
