import React from "react";
import aayushi from "../../assets/aayushi.jpeg";
import khushi from "../../assets/khushi.jpg";
import ravi from "../../assets/ravi.jpg";
import upashna from "../../assets/upashnaB.jpeg";
import bhashkar from "../../assets/bhashkar.jpg";
function StudentCoordinator() {
  return (
    <>
      <div className="flex flex-wrap w-full mx-auto  justify-center items-center mb-4 sm:mb-8 px-6">
        <p className="mt-10 text-white font-bold font-Montserrat text-center text-[16px] sm:text-[20px] -tracking-tight leading-[135%]  p-2 rounded-md bg-base mb-8 sm:mb-12">
          Core Team Members
        </p>
        <div className="flex flex-wrap gap-8 sm:gap-16 w-full mx-auto  justify-evenly items-center">
          <div className="flex flex-wrap flex-col justify-center items-center">
            <img
              src={aayushi}
              alt="Research and Development"
              width={240}
              height={240}
              className="w-[200px] sm:w-[240px] rounded-md mb-2 "
            />
            <p className="text-base2 font-semibold text-[16px] sm:text-[20px]">
              Aayushi Uniyal
            </p>
            <p className="text-base font-bold text-[12px] sm:text-[16px] text-center">
              Student Head & Co-ordinator, <br /> Startup Management
            </p>
          </div>
          <div className="flex flex-wrap flex-col justify-center items-center">
            <img
              src={khushi}
              alt="Research and Development"
              width={240}
              height={240}
              className="w-[200px] sm:w-[240px] rounded-md mb-2 "
            />
            <p className="text-base2 font-semibold text-[16px] sm:text-[20px]">
              Khushi Sharma
            </p>
            <p className="text-base font-bold text-[12px] sm:text-[16px]  text-center">
              Student Co-ordinator, <br />
              Research and Development
            </p>
          </div>
          <div className="flex flex-wrap flex-col justify-center items-center">
            <img
              src={upashna}
              alt="Research and Development"
              width={240}
              height={240}
              className="w-[200px] sm:w-[240px] rounded-md mb-2 "
            />
            <p className="text-base2 font-semibold text-[16px] sm:text-[20px]">
              Upashna Bartwal
            </p>
            <p className="text-base font-bold text-[12px] sm:text-[16px]  text-center">
              Student Co-ordinator, <br /> Media and Branding
            </p>
          </div>
          <div className="flex flex-wrap flex-col justify-center items-center">
            <img
              src={ravi}
              alt="Research and Development"
              width={240}
              height={240}
              className="w-[200px] sm:w-[240px] rounded-md mb-2 "
            />
            <p className="text-base2 font-semibold text-[16px] sm:text-[20px]">
              Ravi Kumar
            </p>
            <p className="text-base font-bold text-[12px] sm:text-[16px]  text-center">
              Student Co-ordinator, <br /> Technology Development
            </p>
          </div>
          <div className="flex flex-wrap flex-col justify-center items-center">
            <img
              src={bhashkar}
              alt="Research and Development"
              width={240}
              height={240}
              className="w-[200px] sm:w-[240px] rounded-md mb-2 "
            />
            <p className="text-base2 font-semibold text-[16px] sm:text-[20px]">
              Bhashkar Singh Rawat
            </p>
            <p className="text-base font-bold text-[12px] sm:text-[16px]  text-center">
              Student Co-ordinator, <br /> Financial Management
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentCoordinator;
