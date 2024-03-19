import { useState, useEffect, useContext } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import axios from "~/api/axios";
import { ProjectItem } from "~/components";
import { mock_projects } from "~/const";
import { useDebounce } from "~/hooks/useDebounce";
import Context from "~/store/Context";

const Project = () => {
  const [filterDropdown, setFilterDropdown] = useState(false);

  //mock project use for testing
  const [projects, setProjects] = useState([]);
  const [searchProjects, setSearchProjects] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const debounced = useDebounce(searchProjects, 500);
  const { loginState } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    if (debounced === "") {
      axios
        .get(`/api/projects/getByLeader/${loginState.loginData.id}`)
        .then((res) => {
          setProjects(res.data);
        })
        .catch(() => {
          // Catch for test mock API
          setProjects(mock_projects);
        })
        .finally(() => {
          setIsLoading(false);
        });

      return;
    }

    // Test for mock API filter calls
    setProjects(() => {
      const filteredProjects = mock_projects.data.filter((project) =>
        project.title.toLowerCase().includes(debounced.toLowerCase())
      );

      console.log("After do filter: ", filteredProjects);
      return {
        data: [...filteredProjects],
      };
    });
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  return (
    <>
      <div id="community-projects" className="px-20 py-10">
        {/* Search and filter */}
        <div className="seach-filter">
          <form className="max-w-lg mx-auto">
            <div className="flex relative">
              {/* Filter container */}
              <div className="filter-container flex-col max-w-[150px]">
                {/* Filter Button */}
                <button
                  id="dropdown-button"
                  onClick={() => {
                    setFilterDropdown((prev) => !prev);
                  }}
                  className="min-w-[150px] flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
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
                      ? "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow relative w-full"
                      : "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow hidden w-full"
                  }
                >
                  <ul className="py-2 text-sm text-gray-700 absolute w-full">
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                      >
                        Mockups
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                      >
                        Templates
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                      >
                        Design
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
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
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Mua he gi do..."
                  value={searchProjects}
                  onChange={(e) => setSearchProjects(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
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

        {/* Add project button */}
        <div className="buttons-container flex justify-start mt-4">
          <Link
            to="/community-leader/form"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add Project
          </Link>
        </div>

        {/* Table */}
        <div className="relative overflow-x-auto sm:rounded-lg mt-5">
          {isLoading ? (
            <Skeleton className="h-64 rounded-lg my-2.5" count={3} />
          ) : (
            <ProjectItem activities={projects} />
          )}
        </div>
      </div>
    </>
  );
};

export default Project;
