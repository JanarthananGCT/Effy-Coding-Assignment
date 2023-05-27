import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import EmployeeCard from "@/components/EmployeeCard";
export default function listEmployees() {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    async function getData() {
      const data = await axios.post("/api/users/ListUsers");
      setData(data.data);
      setLoader(false)
    }
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      {data ? <div>{console.log(data)}</div> : null}
      <div className="pt-10">
        <span className="flex items-center justify-center lg:text-4xl md:text-3xl text-[26px] font-semibold text-green-600 uppercase pb-5">
          Employees
        </span>
      </div>
      {loader ? (
        <Player
          autoplay
          loop
          src="https://assets3.lottiefiles.com/private_files/lf30_l8csvun7.json"
          className="w-[280px] h-[300px]"
        ></Player>
      ) : (
        <div className=" bg-white pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
            {data.map((cont) => (
              <div className="p-4 rounded-md flex items-center justify-center font-medium">
                <EmployeeCard
                  name={cont.First_Name + cont.Last_Name}
                  des={cont.Designation}
                  dob={cont.DOB}
                  id={cont.Id}
                  cid={cont.Company_Id}
                  email={cont.Email}
                  status={cont.Active}
                  info="Leading global trends impacting India"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
