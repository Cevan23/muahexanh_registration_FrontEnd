import { Button } from "~/components/Button";
import { useState, useEffect } from "react";
import axios from "~/api/axios";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [projectDetail, setProjectDetail] = useState();

  useEffect(() => {
    //Mai mot truyen leader id zo so 1
    axios
      .get(`/api/projects/getByLeaderIDAndProjectID/1/${projectId}`)
      .then((res) => setProjectDetail(res.data.data));
  }, [projectId]);

  return (
    <div>
      {projectDetail && (
        <>
          <div className="w-full h-96">Image</div>
          <div className="">
            <div className="flex justify-between items-center pt-5 px-20">
              <div>
                <h1 className="text-2xl font-bold">
                  Status: {projectDetail.status}
                </h1>
                <div className="flex justify-between font-bold">
                  <h1>{projectDetail.dateStart}</h1>
                  <h1 className="ml-5">
                    Students Assigned: ?/{projectDetail.maxProjectMembers}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="px-20 py-5">
            <div className="text-4xl font-bold">{projectDetail.title}</div>
            <div className="text-xl mt-6">
              {projectDetail.description}
              Suspendisse pellentesque turpis sit amet ex laoreet, at vulputate
              lorem sollicitudin. Pellentesque eu est sit amet sem sodales
              imperdiet. Suspendisse scelerisque ipsum justo, ac malesuada diam
              scelerisque rutrum. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Aliquam tincidunt neque dignissim felis
              rutrum, placerat ornare neque eleifend. Nulla facilisi. Etiam
              eleifend quam vitae dui posuere, quis finibus lorem hendrerit.
              Nunc sed est quis leo egestas vulputate at vitae velit.
              Suspendisse euismod id tellus sed hendrerit. Vivamus in aliquet
              nisl. Suspendisse in dapibus lacus. Donec lacinia sapien quis
              ligula viverra ultricies. Donec massa lorem, lacinia ac purus sit
              amet, varius rutrum nibh. Vivamus vitae semper magna. Integer a
              dolor rutrum, ultrices sapien quis, malesuada nulla. Mauris non
              nibh lacus.
            </div>
            <div className="mt-10">List of image</div>
          </div>
          <div className="mx-20 py-8 px-12 rounded-md bg-blue-gray-100">
            <div className="text-xl font-bold mb-4">
              Student&apos;s Requests
            </div>
            <div className="py-3 px-4 flex justify-between rounded-xl bg-green-300">
              <div className="flex items-center">Name</div>
              <div className="flex items-center">Address</div>
              <div className="flex items-center">PhoneNumber</div>
              <div className="flex">
                <Button className="">Approve</Button>
                <Button className="ml-3">Deny</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetail;
