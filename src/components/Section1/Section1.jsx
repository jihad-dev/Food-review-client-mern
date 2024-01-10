import React from "react";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="grid  gap-16 lg:grid-cols-2 lg:p-8 ">
      <div>
        <p className="text-xl font-bold px-10"> Restaurant websites </p>
        <h1 className="text-5xl font-semibold p-8">Your own branded website in minutes</h1>
        <p className="p-8">
          Get a beautifully designed website that converts online visitors into
          customers and keeps your customers coming back for more.
        </p>
        <div className="p-8">
        <li> 40+ ready-to-use themes</li>
        <li> Easy to set up and edit. No coding skills required </li>

        <li> Optimized for discovery and more traffic</li>
        </div>
      </div>
      <div>
        <img
          className="h-[620px] w-full"
          src="https://cdn-bnklg.nitrocdn.com/WQiharaAoSUWjdmYdQaoZKLXawgJIPOR/assets/images/source/rev-bf01236/www.upmenu.com/wp-content/uploads/2022/12/Get-started-easily%E2%80%8B.jpg.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default Section1;
