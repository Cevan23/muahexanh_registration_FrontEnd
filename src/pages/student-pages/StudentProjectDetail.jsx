import { Button } from "~/components/Button";
import { useState, useEffect } from "react";
import axios from "~/api/axios";
import { useParams } from "react-router-dom";
import { mock_projectDetail } from "~/const";
import images from "~/assets";

const StudentProjectDetail = () => {
  const { projectId } = useParams();
  const [projectDetail, setProjectDetail] = useState();

  useEffect(() => {
    //Mai mot truyen student id zo so 1
    axios
      .get(`/api/projects/getByLeaderIDAndProjectID/1/${projectId}`)
      .then((res) => setProjectDetail(res.data.data))
      .catch(() => setProjectDetail(mock_projectDetail));
  }, [projectId]);
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
                <h1 className="text-2xl font-bold">
                  Status: {projectDetail.status}
                </h1>
                <div className="flex justify-between font-bold">
                  <h1>{projectDetail.dateStart}</h1>
                  <h1 className="ml-5">
                    Students Assigned: ?/{projectDetail.maximumStudents}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="px-20 py-5">
            <div className="text-4xl font-bold">{projectDetail.title}</div>
            <div className="text-xl mt-6">{projectDetail.description}</div>
            <div className="mt-10">List of image</div>
          </div>
          <div className="mx-20 py-8 px-12 rounded-md bg-blue-gray-100 mb-40">
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
          </div>
        </>
      )}
    </div>
  );
};

export default StudentProjectDetail;
