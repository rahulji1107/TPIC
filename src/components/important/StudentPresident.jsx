import React from "react";
import coordinator from "../../assets/aayushi.jpeg";
import analyst from "../../assets//rahul.jpeg";

function StudentPresident() {
  return (
    <div className="flex flex-wrap w-full mx-auto  justify-center items-center mb-16 ">
      <p className="text-base3 font-semibold text-[16px] sm:text-[18px] mb-8">
        Members
      </p>
      <div className="flex flex-wrap gap-x-16 w-full mx-auto  justify-center items-center">
        <div className="flex flex-wrap flex-col justify-center items-center">
          <img
            src={coordinator}
            alt="Research and Development"
            width={240}
            height={240}
            className="w-160px sm:w-240px rounded-md mb-2 "
          />
          <p className="text-base2 font-semibold text-[16px] sm:text-[20px]">
            Aayushi uniyal
          </p>
          <p className="text-base font-semibold text-[14px] sm:text-[16px] -mt-1">
            Student President
          </p>
        </div>
        <div className="flex flex-wrap flex-col justify-center items-center">
          <img
            src={analyst}
            alt="Research and Development"
            width={240}
            height={240}
            className="w-160px sm:w-240px rounded-md mb-2 "
          />
          <p className="text-base2 font-semibold text-[16px] sm:text-[20px]">
            Rahul Singh
          </p>
          <p className="text-base font-semibold text-[14px] sm:text-[16px] -mt-1">
            Research Assistant
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentPresident;
