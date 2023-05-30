import React from "react";
import fe3 from "../public/f2.png";
import Red from "../public/red.png"
import Image from "next/image";
import Green from "../public/green.png"
const EmployeeCard = (props) => {
  return (
    <div className="h-[350px] w-[280px] bg-white  cursor-pointer rounded-lg border border-gray-300 hover:border-green-500 hover:drop-shadow-lg infPic ">
      <div className="flex justify-end pt-5 pr-5 items-center">
        {props.status?(<Image src={Green} width={20} height={20} />):(<Image src={Red} width={20} height={20} />)}
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center">
          <Image src={fe3} width={100} height={100} />
        </div>
        <div className="flex justify-center items-center">
          <span className="lg:md:text-[18px] md:text-[18px] flex sm:text-[16px] text-[16px] text-black text-center px-5">
            Mr/Mrs. {props.name}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <span className="lg:md:text-[16px] md:text-[16px] flex sm:text-[14px] text-[14px] text-gray-500 text-center px-5">
            ( {props.des} )
          </span>
        </div>
        <div className="flex justify-center items-center">
          <span className="lg:md:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] text-black text-center px-5">
            DOB: {props.dob.substring(0, 10)}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <span className="lg:md:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] text-green-600 text-center px-5">
            ID: {props.id}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <span className="lg:md:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] text-green-600 text-center px-5">
            Company_ID: {props.cid}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <span className="lg:md:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] text-green-600 text-center px-5">
            Email: {props.email}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
