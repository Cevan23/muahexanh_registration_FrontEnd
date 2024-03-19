import { useState, useEffect } from "react";
import images from "~/assets";
import { ProjectItem } from "~/components";
import { mock_projects } from "~/const";
import { useParams } from "react-router-dom";
const Home = () => {
  const { projectType } = useParams();
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState([]);
  const tab = ["University Projects", "Student Projects"];
  const [filterProject, setFilterProject] = useState(tab[0]);

  console.log("projectType", search);
  const handleFilterProject = (filterProject) => {
    setFilterProject(filterProject);
  };

  // thay doi theo thang filter neu thang do la cua student hay university
  useEffect(() => {
    setProjects(mock_projects);
  }, [filterProject]);
  console.log(filterProject);
  return (
    <div className="wrapper px-20 py-10 border-4">
      <div className="flex justify-center flex-col">
        <img src={images.homebanner} alt="" className="w-full" />
        <div className="flex space-x-8">
          {tab.map((tab) => (
            <button
              key={tab}
              onClick={() => handleFilterProject(tab)}
              className={`hover:bg-blue-400 bg-blue-500 text-white  py-2 px-4 border-b-4  hover:border-blue-500 rounded ${
                filterProject === tab
                  ? "font-bold border-4 border-blue-500"
                  : ""
              }`}
            >
              {tab}
            </button>
          ))}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[250px] border-2 border-blue-500 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search anything about project"
          ></input>
        </div>
      </div>
      <div className="relative overflow-x-auto sm:rounded-lg mt-5">
        <ProjectItem activities={projects} />
      </div>
    </div>
  );
};

export default Home;
