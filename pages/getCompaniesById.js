import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import CompanyCard from "@/components/CompanyCard";

export default function getCompaniesById() {
  const [loader, setLoader] = useState(true);
  const [id, setId] = useState(null);
  const [data, setData] = useState(null);
  const toastifySuccess = () => {
    toast.success("Got Details!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const getDetails = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/companies/GetCompanyById", {
      Id: id,
    });
    setData(res.data);
    toastifySuccess()
    setLoader(false);
    console.log(res);
  };
  return (
    <div>
      <Navbar />
      

      <div className="pt-10">
      <ToastContainer />
        <span className="flex items-center px-1 text-center justify-center lg:text-4xl md:text-3xl text-[26px] font-semibold text-green-600 uppercase pb-5">
          Get Company Details By ID
        </span>
      </div>

      <div className="flex justify-center items-centers ">
        <div className=" bg-white w-12/12 md:w-11/12 lg:w-11/12 xl:w-11/12 min-h-[60vh] rounded-lg  pb-20">
          <div className="pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-4">
            <div className="p-4 rounded-md flex items-center justify-center font-medium">
              <form className="">
                <div className="flex flex-col mb-3">
                  <label className="  font-medium pb-4">
                    Enter Company ID :
                  </label>
                  <input
                    type="Number"
                    placeholder="Enter the Company Id"
                    className="border-2 border-slate-300 px-4 py-2  outline-none sm:w-[320px] w-auto"
                    onChange={(e) => {
                      setId(e.target.value);
                    }}
                    required
                  />
                </div>

                <div className="flex items-center pt-3 justify-center">
                  <button
                    type="submit"
                    onClick={getDetails}
                    className="border-2 border-black bg-black text-white px-4 py-2 mb-3 sm:w-[320px] w-[260px] font-medium"
                  >
                    Get Details
                  </button>
                </div>
              </form>
            </div>
            <div className="p-4  rounded-md flex items-center justify-center font-medium">
              {loader ? (
                <Player
                  autoplay
                  loop
                  src="https://assets3.lottiefiles.com/private_files/lf30_l8csvun7.json"
                  className="w-[280px] h-[300px]"
                ></Player>
              ) : (
                <CompanyCard
                  name={data.Name}
                  id={data.Id}
                  info={data.Coordinates.Address}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
