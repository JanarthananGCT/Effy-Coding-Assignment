import React from "react";
import fe3 from "../public/f1.png";
import loc from "../public/location.gif";
import Image from "next/image";
import { useMemo } from "react";
import { useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import close from "../public/close.svg";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
function Map({lat,long}) {
  const center = useMemo(() => ({ lat: lat, lng: long }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}
const CompanyCard = (props) => {
  const [board, setBoard] = useState(false);
  function handleBoard() {
    setBoard(!board);
  }
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCgLok5nclmFx_TKMGbEfAVnIYL7jaHLpo",
  });
  return (
    <div>
      {board ? (
        <>
          <div
            className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none cursor-pointer"
            onClick={handleBoard}
          >
            <div className="relative sm:w-auto md:w-10/12  lg:w-9/12 xl:w-9/12 my-20 mx-auto ">
              <div className="bg-white rounded-md drop-shadow-md">
                <div className="p-4">
                  <div className="flex justify-end items-end cursor-pointer">
                    <Image src={close} />
                  </div>
                  <div className="flex justify-center items-center">
                    {isLoaded ? (
                      <Map lat={props.lat} long={props.long} />
                    ) : (
                      <Player
                        autoplay
                        loop
                        src="https://assets3.lottiefiles.com/private_files/lf30_l8csvun7.json"
                        className="w-[280px] h-[300px]"
                      ></Player>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
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
