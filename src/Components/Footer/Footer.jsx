import React from "react";
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div
        className=" pb-5 flex flex-col items-center "
        style={{ backgroundColor: "#0e2c3a" }}
      >
        <div className="md:w-10/12 w-full mt-20 flex flex-col md:flex-row">
          <div className="lg:w-7/12 md:w-9/12 w-full lg:text-lg text-sm p-2 text-white">
            <p>
              We understand that emergencies can be stressful, and we're here to
              help. If you have any questions or concerns, please don't hesitate
              to contact us.
            </p>
          </div>

          <div className="w-full text-xl flex justify-center">
            <div className="flex justify-between w-7/12 md:w-6/12 lg:w-4/12  md:ml-28 lg:ml-32  mt-5">
              <span className="bg-gray-100 p-3 rounded-2xl cursor-pointer">
                <AiOutlineLinkedin />
              </span>
              <span className="bg-gray-100 p-3 rounded-2xl cursor-pointer">
                <AiOutlineMail />
              </span>
            </div>
          </div>
        </div>

        <div className="text-white flex justify-center mt-20 w-10/12 border-t border-gray-100">
          <p className="mt-5 text-xs md:text-1xl">
            Copyright © 2010-2023 rush Company All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
