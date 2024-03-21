import { Button } from "~/components";
import { useState, useEffect } from "react";
import images from "~/assets";
import { ProjectItem } from "~/components";
import { mock_projects } from "~/const";
import { useAuth } from "~/hooks";
import axios from "~/api/axios";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState("");
  const tab = ["All Projects", "Enrolled Projects"];
  const [filterProject, setFilterProject] = useState(tab[0]);
  const { auth } = useAuth();
  const handleFilterProject = (filterProject) => {
    setFilterProject(filterProject);
  };

  useEffect(() => {
    if (filterProject === "All Projects") {
      axios
        .get(`/api/projects`)
        .then((res) => {
          setProjects(res.data);
          setMessage("Get all projects successfully");
        })
        .catch(() => {
          console.log.error("Get all projects failed");
          set;
        });
    } else if (filterProject === "Enrolled Projects") {
      axios
        .get(`/api/students/ALlProjectOfStudent?studentId=${auth.id}`)
        .then((res) => {
          setProjects(res.data.data.projects);
          console.log(res.data);

          setMessage("Get enrolled projects successfully");
        })
        .catch(() => {
          setMessage("Get enrolled projects failed");
        });
    }
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
