import { Button } from "~/components";
import { useState, useEffect } from "react";
import images from "~/assets";
import { ProjectItem } from "~/components";
import { mock_projects } from "~/const";
import axios from "~/api/axios";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const tab = ["All Projects", "Enrolled Projects"];
  const [filterProject, setFilterProject] = useState(tab[0]);

  const handleFilterProject = (filterProject) => {
    setFilterProject(filterProject);
  };

  useEffect(() => {
    axios
      .get(`/api/projects`)
      .then((res) => {
        setProjects(res.data);
      })
      .catch(() => {
        // Catch for test mock API
        setProjects(mock_projects);
      });
  }, [filterProject]);

  return (
    <div className="wrapper px-20 py-10 border-4">
      <div className="flex justify-center flex-col">
        <img src={images.homebanner} alt="" className="w-full" />
        <div className="flex space-x-8">
          {tab.map((tab) => (
            <Button
              key={tab}
              onClick={() => handleFilterProject(tab)}
              className={`${filterProject === tab ? "" : ""}`}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>
      <div className="relative overflow-x-auto sm:rounded-lg mt-5">
        <ProjectItem activities={projects} />
      </div>
    </div>
  );
};

export default Home;
