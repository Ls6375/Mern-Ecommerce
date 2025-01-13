import React from "react";
import { assets } from "@src/assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40	text-sm">
        <div>
          <Link to={'/'} ><img src={assets.logo} className="mb-5 w-20" alt="Logo" /></Link>
          <p className="w-full md:w-2/3 text-gray-600 ">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, quia eligendi. Corrupti fugit, deleniti obcaecati dolorum quibusdam , voluptatem! Veniam, eligendi fugiat?
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 "> COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Email: info@luxembourg.com</li>
            <li>Phone: +1 123 456 7890</li>
            <li>Address: 123 Main St, Luxembourg, LX 1234</li>
          </ul>
        </div>
      </div>
      <div className="w-full">
        <hr />
        <p className="py-5 text:sm text-center">
          Copyright 2024@ EverCart.com - All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
