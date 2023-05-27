import React from "react";
import fe3 from "../public/f1.png";
import loc from "../public/location.gif";
import Image from "next/image";
import { useMemo } from "react";
import { useState } from "react";
import dynamic from 'next/dynamic';
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import close from "../public/close.svg";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import MapContainer from "./MapContainer";
const CompanyCard = (props) => {
  const [board, setBoard] = useState(false);
  function handleBoard() {
    setBoard(!board);
  }

  return (
    <div>
      {board ? (
        <>
        
          <div
            className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none cursor-pointer"
            onClick={handleBoard}
          >
            <div className="relative w-12/12 md:w-10/12  lg:w-9/12 xl:w-9/12 my-20  ">
              <div className="bg-white rounded-md ">
                <div className="p-4">
                  <div className="flex justify-end items-end cursor-pointer">
                    <Image src={close} />
                  </div>
                  <div className="flex w-full justify-center items-center">
                    <MapContainer lat={props.lat} long={props.long} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0  bg-black"></div>
        </>
      ) : null}
      <div className="h-[330px] w-[280px] bg-white  rounded-lg border border-gray-300 hover:border-green-500 hover:drop-shadow-lg infPic ">
        <div className="flex justify-end items-center pt-2 pr-4">
          <Image
            src={loc}
            width={30}
            height={30}
            className="cursor-pointer "
            onClick={handleBoard}
          />
        </div>
        
        <div className="flex flex-col items-center justify-center">
          
          <div className="flex justify-center items-center">
            <Image src={fe3} width={180} height={150} />
          </div>
          <div className="flex justify-center items-center">
            <span className="lg:md:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] text-black text-center px-5">
              {props.name}
            </span>
          </div>
          
          <div className="flex justify-center items-center">
            <span className="lg:md:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] text-green-600 text-center px-5">
              ID: {props.id}
            </span>
          </div>
          

          <div className="flex justify-center items-center">
            <span className="lg:md:text-[18px] md:text-[18px] flex sm:text-[16px] text-[16px] text-gray-600 text-center px-5">
              {props.info}
            </span>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
