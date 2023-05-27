import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { ToastContainer, toast } from "react-toastify";
import EmployeeCard from "@/components/EmployeeCard";
import "react-toastify/dist/ReactToastify.min.css";
export default function addEmployees() {
  const [loader, setLoader] = useState(true);
  const [id, setId] = useState(null);
  const [fname, setFName] = useState(null);
  const [lname, setLName] = useState(null);
  const [data, setData] = useState(null);
  const [date, setDate] = useState(null);
  const [des, setDes] = useState("");
  const [email, setEmail] = useState("");
  const [arr, setArr] = useState([]);
  const [cid, seCid] = useState("");
  const toastifySuccess = () => {
    toast.success("Successfully Added!", {
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
  const toastifyFailure = () => {
    toast.error("All Fields are Required !", {
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
  const addEmployee = async (e) => {
    e.preventDefault();
    if (id == null) {
      toastifyFailure();
    } else {
      const res = await axios.post("/api/users/CreateUser", {
        First_Name: fname,
        Last_Name: lname,
        Email: email,
        Id: id,
        Company_Id: cid,
        Designation: des,
        DOB: date,
        Active: true,
      });
      // console.log(update);
      setData(res.data);
      toastifySuccess();
      setLoader(false);
      console.log(res);
      const comp = await axios.post("/api/companies/GetCompanyById", {
        Id: cid,
      });
      if (comp.data == null) {
        toastifyFailure()
      } else {
        setArr(comp.data.Users_Ids);
        const newarr = arr.push(id);
        const update = await axios.post("/api/companies/UpdateUsersToCompany", {
          Id: cid,
          Users_Ids: newarr,
        });
      }
    }
  };
  return (
    <div>
      <Navbar />
      <div className="pt-10">
        <ToastContainer />
        <span className="flex items-center px-1 text-center justify-center lg:text-4xl md:text-3xl text-[26px] font-semibold text-green-600 uppercase pb-5">
          Add Employee Details
        </span>
      </div>

      <div className="flex justify-center items-centers ">
        <div className=" bg-white w-12/12 md:w-11/12 lg:w-11/12 xl:w-11/12 min-h-[60vh] rounded-lg  pb-20">
          <div className="pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-4">
            <div className="p-4 rounded-md flex items-center justify-center font-medium">
              <form className="">
                <div className="flex flex-col mb-3">
                  <label className="  font-medium pb-4">
                    Enter Employee ID :
                  </label>
                  <input
                    type="Number"
                    placeholder="Enter the employee Id"
                    className="border-2 border-slate-300 px-4 py-2  outline-none sm:w-[320px] w-auto"
                    onChange={(e) => {
                      setId(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label className="  font-medium pb-4">
                    Enter Employee First Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the employee Name"
                    className="border-2 border-slate-300 px-4 py-2  outline-none sm:w-[320px] w-auto"
                    onChange={(e) => {
                      setFName(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label className="  font-medium pb-4">
                    Enter Employee Last Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the employee Name"
                    className="border-2 border-slate-300 px-4 py-2  outline-none sm:w-[320px] w-auto"
                    onChange={(e) => {
                      setLName(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label className="  font-medium pb-4">
                    Enter Employee DOB :
                  </label>
                  <input
                    type="date"
                    placeholder="Enter the employee dob"
                    className="border-2 border-slate-300 px-4 py-2  outline-none sm:w-[320px] w-auto"
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label className="  font-medium pb-4">
                    Enter Employee Designation :
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the employee designation"
                    className="border-2 border-slate-300 px-4 py-2  outline-none sm:w-[320px] w-auto"
                    onChange={(e) => {
                      setDes(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label className="  font-medium pb-4">
                    Enter Employee Email :
                  </label>
                  <input
                    type="email"
                    placeholder="Enter the employee email"
                    className="border-2 border-slate-300 px-4 py-2  outline-none sm:w-[320px] w-auto"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label className="  font-medium pb-4">
                    Enter Company ID :
                  </label>
                  <input
                    type="Number"
                    placeholder="Enter the employee company id"
                    className="border-2 border-slate-300 px-4 py-2  outline-none sm:w-[320px] w-auto"
                    onChange={(e) => {
                      seCid(e.target.value);
                    }}
                    required
                  />
                </div>

                <div className="flex items-center pt-3 justify-center">
                  <button
                    onClick={addEmployee}
                    type="submit"
                    className="border-2 border-black bg-black text-white px-4 py-2 mb-3 sm:w-[320px] w-[260px] font-medium"
                  >
                    Add Details
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
                <EmployeeCard
                  name={data.First_Name + data.Last_Name}
                  des={data.Designation}
                  dob={data.DOB}
                  id={data.Id}
                  cid={data.Company_Id}
                  email={data.Email}
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
