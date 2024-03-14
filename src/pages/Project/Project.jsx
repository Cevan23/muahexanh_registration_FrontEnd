import { useState } from "react";
import { ProjectTable } from "./components/ProjectTable";
// import { Link } from "react-router-dom";

const Project = () => {
  const [filterDropdown, setFilterDropdown] = useState(false);

  const data = [
    {
      title: "Mua he xanh",
      date: new Date(2003, 8, 13),
      members: 100,
      Status: "active",
    },
    {
      title: "Mua he trang",
      date: new Date(2005, 1, 20),
      members: 50,
      Status: "active",
    },
    {
      title: "Mua he trang",
      date: new Date(2005, 1, 20),
      members: 50,
      Status: "active",
    },
    {
      title: "Mua he trang",
      date: new Date(2005, 1, 20),
      members: 50,
      Status: "active",
    },
    {
      title: "Mua he trang",
      date: new Date(2005, 1, 20),
      members: 50,
      Status: "active",
    },
  ];

  return (
    <>
      <div id="community-leader" className="flex-col text-center">
        <h1 className="community_leader__name text-4xl font-bold text-gray-900 dark:text-white">
          HoHo Community
        </h1>
        <div className="community_leader__email text-xl italic">
          nhandeptrai@gmail.com
        </div>
      </div>

      <div id="community-projects">
        {/* Search and filter */}
        <div className="seach-filter">
          <form className="max-w-lg mx-auto">
            <div className="flex">
              {/* Filter container */}
              <div className="filter-container flex-col max-w-[150px]">
                {/* Filter Button */}
                <button
                  id="dropdown-button"
                  onClick={() => {
                    console.log("prev:", filterDropdown);
                    setFilterDropdown((prev) => !prev);
                    console.log("after:", filterDropdown);
                  }}
                  className="min-w-[150px] flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                  type="button"
                >
                  All categories
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* Dropdown filter */}
                <div
                  id="dropdown"
                  className={
                    filterDropdown
                      ? "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 relative w-full"
                      : "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 hidden w-full"
                  }
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 absolute w-full">
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Mockups
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Templates
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Design
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Logos
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Search */}
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Mua he gi do..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Table */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
          <ProjectTable activities={data} />
        </div>
      </div>
    </>
  );
};

export default Project;
