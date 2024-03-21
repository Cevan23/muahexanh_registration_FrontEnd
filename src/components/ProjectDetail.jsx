import { Button } from "~/components/Button";
import { useState, useEffect } from "react";
import axios from "~/api/axios";
import { useParams } from "react-router-dom";
import { mock_projectDetail } from "~/const";
import images from "~/assets";
import { useAuth } from "~/hooks";
import { UpdateProject } from "../pages";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [projectDetail, setProjectDetail] = useState();
  const [isUpdate, setIsUpdate] = useState(false);
  const { auth } = useAuth();

  useEffect(() => {
    //Mai mot truyen leader id zo so 1
    if (auth.role === "CommunityLeader") {
      axios
        .get(`/api/projects/getProjectDetail/`, {
          params: {
            leaderId: auth.id,
            projectId: projectId,
          },
        })
        .then((res) => {
          setProjectDetail(res.data.data);
        })
        .catch(() => setProjectDetail(mock_projectDetail));
    } else {
  
      axios
        .get(`/api/projects/${projectId}`)
        .then((res) => {
          console.log(res.data);
          setProjectDetail(res.data.data);
        })
        .catch(() => setProjectDetail(mock_projectDetail));
    }
  }, []);

  return (
    <div>
      {projectDetail && (
        <>
          <div className="w-full h-[550px]">
            <img src={images.homebanner} className="h-full w-full" />
          </div>

          {/* Project data */}
          <div className="">
            <div className="flex justify-between items-center pt-5 px-20">
              <div>
                {auth.role !== "CommunityLeader" ? (
                  <>
                    <h1>
                      {projectDetail.leader_name} -{" "}
                      {projectDetail.leader_contact}
                    </h1>
                    <h1 className="text-2xl font-bold">
                    Status: {projectDetail.projectInformation.status.toUpperCase()}
                    </h1>
                    <div className="flex justify-between font-bold">
                      <h1>{projectDetail.projectInformation.dateStart}</h1>
                      <h1 className="ml-5">
                        Students Assigned: {projectDetail.number_of_student} /{" "}
                        {projectDetail.projectInformation.maxProjectMembers}
                      </h1>
                    </div>
                  </>
                ) : (
                  <>
                    <h1 className="text-2xl font-bold">
                      Status: {projectDetail.status}
                    </h1>
                    <div className="flex justify-between font-bold">
                      <h1>{projectDetail.dateStart}</h1>
                      <h1 className="ml-5">
                        Students Assigned: {projectDetail.students.length} /{" "}
                        {projectDetail.maximumStudents}
                      </h1>
                    </div>
                  </>
                )}
              </div>
              {auth.role === "CommunityLeader" && (
                <Button
                  onClick={() => {
                    setIsUpdate(true);
                    console.log(isUpdate);
                  }}
                >
                  Update Project
                </Button>
              )}
            </div>
          </div>

          {/* Detail Project information */}
          <div className="px-20 py-5">
            {auth.role !== "CommunityLeader" ? (
              <>
                <div className="text-4xl font-bold">
                  {projectDetail.projectInformation.title}
                </div>
                <div className="text-xl mt-6">
                  {projectDetail.projectInformation.description}
                </div>
              </>
            ) : (
              <>
                <div className="text-4xl font-bold">{projectDetail.title}</div>
                <div className="text-xl mt-6">{projectDetail.description}</div>
              </>
            )}
          </div>

          {auth.role === "CommunityLeader" && (
            <div className="mx-20 py-8 px-12 rounded-md bg-blue-gray-100 mb-40">
              <div className="text-xl font-bold mb-4">
                Student&apos;s Requests
              </div>
              {projectDetail.students.map((student, key) => (
                <div
                  key={key}
                  className="py-3 px-4 my-4 flex justify-between rounded-xl bg-green-300"
                >
                  <div className="flex items-center w-56">
                    {student.full_name}
                  </div>
                  <div className="flex items-center w-56">
                    {student.address}
                  </div>
                  <div className="flex items-center w-32">
                    {student.phone_number}
                  </div>
                  <div className="flex">
                    <Button className="">Approve</Button>
                    <Button className="ml-3">Deny</Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {isUpdate && (
        <div className="fixed z-1000 inset-0 bg-opacity-50 bg-black">
          <UpdateProject projectDetail={projectDetail} />
          <div
            className="absolute top-5 right-10 text-2xl font-bold text-[#fff] cursor-pointer"
            onClick={() => {
              setIsUpdate(false);
            }}
          >
            X
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
