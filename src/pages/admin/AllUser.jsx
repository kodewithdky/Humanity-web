import Layout from "./layout/Layout";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

const AllUser = () => {
  return (
    <Layout>
      <div className="absolute sm:left-[30%] mt-4">
        <div className="flex flex-col">
          <div className=" overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
              <div className="relative  text-gray-500 focus-within:text-gray-900 mb-4">
                <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none ">
                  <BiSearch />
                </div>
                <input
                  type="text"
                  id="default-search"
                  className="block w-80 h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                  placeholder="Search user"
                />
              </div>
              <div className="overflow-hidden ">
                <table className=" min-w-full rounded-xl">
                  <thead>
                    <tr className="bg-gray-50">
                      <th
                        scope="col"
                        className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"
                      >
                        {" "}
                        Name{" "}
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                      >
                        {" "}
                        Email{" "}
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                      >
                        {" "}
                        Phone{" "}
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                      >
                        {" "}
                        Role{" "}
                      </th>
                      <th
                        scope="col"
                        className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"
                      >
                        {" "}
                        Actions{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-300 ">
                    <tr className="bg-white transition-all duration-500 hover:bg-gray-50">
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                        {" "}
                        DK. Yadav
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {" "}
                        kodewithdky@gmail.com{" "}
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {" "}
                        8953273123
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {" "}
                        Admin
                      </td>
                      <td className=" p-5 ">
                        <div className="flex items-center gap-1">
                          <button className="p-2  rounded-full  group transition-all duration-500  flex item-center">
                            <FiEdit color="blue" />
                          </button>
                          <button className="p-2 rounded-full  group transition-all duration-500  flex item-center">
                            <RiDeleteBin6Line color="red" />
                          </button>
                          <button className="p-2 rounded-full  group transition-all duration-500  flex item-center">
                            <BiDotsVerticalRounded />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-white transition-all duration-500 hover:bg-gray-50">
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                        {" "}
                        DK. Yadav
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {" "}
                        kodewithdky@gmail.com{" "}
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {" "}
                        8953273123
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {" "}
                        Admin
                      </td>
                      <td className=" p-5 ">
                        <div className="flex items-center gap-1">
                          <button className="p-2  rounded-full  group transition-all duration-500  flex item-center">
                            <FiEdit color="blue" />
                          </button>
                          <button className="p-2 rounded-full  group transition-all duration-500  flex item-center">
                            <RiDeleteBin6Line color="red" />
                          </button>
                          <button className="p-2 rounded-full  group transition-all duration-500  flex item-center">
                            <BiDotsVerticalRounded />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-white transition-all duration-500 hover:bg-gray-50">
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                        {" "}
                        DK. Yadav
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {" "}
                        kodewithdky@gmail.com{" "}
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {" "}
                        8953273123
                      </td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                        {" "}
                        Admin
                      </td>
                      <td className=" p-5 ">
                        <div className="flex items-center gap-1">
                          <button className="p-2  rounded-full  group transition-all duration-500  flex item-center">
                            <FiEdit color="blue" />
                          </button>
                          <button className="p-2 rounded-full  group transition-all duration-500  flex item-center">
                            <RiDeleteBin6Line color="red" />
                          </button>
                          <button className="p-2 rounded-full  group transition-all duration-500  flex item-center">
                            <BiDotsVerticalRounded />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* pagination */}
        <div className="flex justify-center items-center mt-6">
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <Link
              to="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <CiCircleChevLeft />
            </Link>
            <Link
              to="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              1
            </Link>
            <Link
              to="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              2
            </Link>
            <Link
              to="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              3
            </Link>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <Link
              to="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              8
            </Link>
            <Link
              to="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              9
            </Link>
            <Link
              to="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              10
            </Link>
            <Link
              to="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <CiCircleChevRight />
            </Link>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export default AllUser;
