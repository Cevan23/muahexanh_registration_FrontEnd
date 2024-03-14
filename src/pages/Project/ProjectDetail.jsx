import { Button } from "~/components/Button";
// import { useState, useEffect } from "react";
// import axios from "~/api/axios";
// import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  //   const [project, setProject] = useState();
  //   const [projectId] = useParams();

  //   useEffect(() => {
  //     axios.get(`/api/projects/${projectId}`).then((res) => setProject(res.data));
  //   }, [projectId]);

  return (
    <div>
      {/* Header */}
      <div className="bg-[#c9c8c7]">
        <div className="flex justify-between items-center py-5 px-20">
          <div>
            <h1 className="text-2xl font-bold">Status: Pending</h1>
            <div className="flex justify-between font-bold">
              <h1>14/3/2024</h1>
              <h1 className="ml-5">Students Assigned: 30/40</h1>
            </div>
          </div>

          <div>
            <h3>Owner name</h3>
            <h3>Phone number</h3>
          </div>
        </div>
      </div>

      {/* Project detail */}
      <div className="px-20 py-10">
        <div className="text-4xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className="text-xl mt-6">
          Suspendisse pellentesque turpis sit amet ex laoreet, at vulputate
          lorem sollicitudin. Pellentesque eu est sit amet sem sodales
          imperdiet. Suspendisse scelerisque ipsum justo, ac malesuada diam
          scelerisque rutrum. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Aliquam tincidunt neque dignissim felis rutrum, placerat
          ornare neque eleifend. Nulla facilisi. Etiam eleifend quam vitae dui
          posuere, quis finibus lorem hendrerit. Nunc sed est quis leo egestas
          vulputate at vitae velit. Suspendisse euismod id tellus sed hendrerit.
          Vivamus in aliquet nisl. Suspendisse in dapibus lacus. Donec lacinia
          sapien quis ligula viverra ultricies. Donec massa lorem, lacinia ac
          purus sit amet, varius rutrum nibh. Vivamus vitae semper magna.
          Integer a dolor rutrum, ultrices sapien quis, malesuada nulla. Mauris
          non nibh lacus.
        </div>
        <div className="mt-10">List of image</div>
      </div>

      {/* Approve Member list */}
      <div className="mx-20 py-8 px-12 rounded-md bg-blue-gray-100">
        <div className="text-xl font-bold mb-4">Student&apos;s Requests</div>
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
    </div>
  );
};

export default ProjectDetail;
