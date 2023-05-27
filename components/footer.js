import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  return (
    <div>
      <div className="sm:pt-10  pb-4 footer">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-4 px-5">
          <div className="p-2 rounded-md flex sm:justify-start justify-center sm:text-left text-center">
            <div>
              <span className="heading">Companies</span>
              <br />
              <ul>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/listCompanies">List Company</Link>
                </li>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/getCompaniesById">Filter Company </Link>
                </li>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/addCompany">Add a Company</Link>
                </li>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/updateCompany">Update Company Details</Link>
                </li>

                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/addRemoveEmployee">Add/Remove Employees</Link>
                </li>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/deleteCompanyById">Delete Details</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-2  rounded-md flex sm:justify-start justify-center mb-5 sm:text-left text-center">
            <div>
              <span className="heading">Employees</span>
              <br />
              <ul>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/listEmployees">List Employees</Link>
                </li>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/getEmployeeById">Filter Employees</Link>
                </li>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/addEmployee">Create Employees Record</Link>
                </li>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/updateEmployee">Update Employees Details</Link>
                </li>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/deactivateEmployee">Deactivate Employees</Link>
                </li>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="/deleteEmployeeById">
                    Delete Employees Record
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-2  rounded-md flex sm:justify-start justify-center mb-9 sm:text-left text-center">
            <div>
              <span className="heading">About us</span>
              <br />
              <ul>
                <li className="py-1 foottext hover:text-green-500">
                  <Link href="https://forms.gle/SMenGudR77fkRshKA">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="hru mx-9 mb-5" />
        <div className="flex items-center justify-between">
          <div className="foottext pl-8">
            <Link href="/">©️ ThinkEffy - 2023</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
