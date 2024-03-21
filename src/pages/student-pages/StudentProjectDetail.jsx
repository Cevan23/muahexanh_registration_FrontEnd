import { Button } from "~/components/Button";
import { useState, useEffect } from "react";
import axios from "~/api/axios";
import { useParams } from "react-router-dom";
import { mock_projectDetail } from "~/const";
import images from "~/assets";
import { useAuth } from "~/hooks";

const StudentProjectDetail = () => {
  const { projectId } = useParams();
  const [projectDetail, setProjectDetail] = useState();
  const { auth } = useAuth();

  useEffect(() => {
    axios
      .get(`/api/projects/${projectId}`)
      .then((res) => {
        console.log(res.data);
        setProjectDetail(res.data.data);
      })
      .catch(() => setProjectDetail(mock_projectDetail));
  }, [projectId]);

  const handleEnrollProject = (e) => {
    e.preventDefault();

    axios
      .post(`/api/students/applyProject`, {
        projectId: projectId.toString(),
        studentId: auth.id.toString(),
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {projectDetail && (
        <>
          <div className="w-full h-[550px]">
            <img src={images.homebanner} className="h-full w-full" />
          </div>
          <div className="">
            <div className="flex justify-between items-center pt-5 px-20">
              <div>
                <h1>
                  {projectDetail.leader_name} - {projectDetail.leader_contact}
                </h1>
                <h1 className="text-2xl font-bold">
                  Status: {projectDetail.projectInformation.status}
                </h1>
                <div className="flex justify-between font-bold">
                  <h1>{projectDetail.projectInformation.dateStart}</h1>
                  <h1 className="ml-5">
                    Students Assigned: {projectDetail.number_of_student} /{" "}
                    {projectDetail.projectInformation.maxProjectMembers}
                  </h1>
                </div>
              </div>

              <Button onClick={(e) => handleEnrollProject(e)}>
                Enroll Project
              </Button>
            </div>
          </div>
          <div className="px-20 py-5">
            <div className="text-4xl font-bold">
              {projectDetail.projectInformation.title}
            </div>
            <div className="text-xl mt-6">
              {projectDetail.projectInformation.description}
            </div>
          </div>

          {/* <div className="mx-20 py-8 px-12 rounded-md bg-blue-gray-100 mb-40">
            <div className="text-xl font-bold mb-4">
              Student&apos;s Requests
            </div>
            <div className="py-3 px-4 flex justify-between rounded-xl bg-green-300">
              <div className="flex items-center">Name</div>
              <div className="flex items-center">Address</div>
              <div className="flex items-center">PhoneNumber</div>
              <div className="flex">
                <Button className="">Enroll</Button>
              </div>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default StudentProjectDetail;
