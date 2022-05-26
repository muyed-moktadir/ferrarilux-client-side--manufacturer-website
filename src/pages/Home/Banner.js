import React from "react";
import banner from "../../image/banner.jpg";


const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} alt="" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">FerrariLUX</h1>
          <p className="py-6 text-1xl">
            FerrariLux Explore the Tools . ferrari has made of different kinds of manufacturer tools. which is made its the king of  street.....
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
