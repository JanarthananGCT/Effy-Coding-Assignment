import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import mission from "../public/mission.svg";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center py-5 px-2 md:px-5 lg:px-5 xl:px-5 ">
        <div className="missionpage">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 ">
            <div className=" rounded-md flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className=" flex items-center justify-center">
                  <h1 className="xl:text-4xl lg:text-3xl  md:text-2xl text-[26px] text-green-600 font-normal pb-5">
                    The Idea Behind Me
                  </h1>
                </div>
                <div className=" rounded-md flex items-center justify-center xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700   text-center px-4">
                  To Inspire, Enable, and Facilitate the creation and nurturing
                  of Ideas that can catalyse India's path to unprecedented
                  innovation and growth.To Inspire, Enable, and Facilitate the
                  creation and nurturing of Ideas that can catalyse India's path
                  to unprecedented innovation and growth.
                </div>
              </div>
            </div>
            <div className=" rounded-md flex items-center justify-center ">
              <Image src={mission} width={300} height={400} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
