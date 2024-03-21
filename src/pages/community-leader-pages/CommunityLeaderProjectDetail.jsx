import { Button } from "~/components/Button";
import { useState, useEffect } from "react";
import axios from "~/api/axios";
import { useParams } from "react-router-dom";
import { mock_projectDetail } from "~/const";
import images from "~/assets";
import { useAuth } from "~/hooks";
import { UpdateProject } from "..";

const CommunityLeaderProjectDetail = () => {
  const { projectId } = useParams();
  const [projectDetail, setProjectDetail] = useState();
  const [studentApprove, setStudentApprove] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const { auth } = useAuth();
  const [isStudentDetail, setIsStudentDetail] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/projects/getProjectDetailStudentPending/`, {
        params: {
          leaderId: auth.id,
          projectId: projectId,
        },
      })
      .then((res) => {
        setProjectDetail(res.data.data);
      })
      .catch(() => setProjectDetail(mock_projectDetail));

    axios
      .get(`/api/projects/getProjectDetailStudentAccepted/`, {
        params: {
          leaderId: auth.id,
          projectId: projectId,
        },
      })
      .then((res) => {
        setStudentApprove(res.data.data.students);
      })
      .catch(() => setProjectDetail(mock_projectDetail));
  }, []);

  const handleApprove = (studentId) => {
    const studentIdString = String(studentId); // Convert studentId to string
    const projectIdString = String(projectId); // Convert projectId to string

    axios
      .put(`/api/projects/approveStudent/`, null, {
        params: {
          studentId: studentIdString,
          projectId: projectIdString,
        },
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((e) => console.error(e.message));
  };

  const handleReject = (studentId) => {
    const studentIdString = String(studentId); // Convert studentId to string
    const projectIdString = String(projectId); // Convert projectId to string

    axios
      .delete(`/api/projects/rejectStudentByID/`, {
        params: {
          studentId: studentIdString,
          projectId: projectIdString,
        },
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((e) => console.error(e.message));
  };

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
                      Status:{" "}
                      {projectDetail.projectInformation.status.toUpperCase()}
                    </h1>
                    <div className="flex justify-between font-bold">
                      <h1>{projectDetail.projectInformation.dateStart}</h1>
                      <h1 className="ml-5">
                        Students Assigned: {studentApprove.length} /{" "}
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
                        Students Assigned: {studentApprove.length} /{" "}
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
                  Cập nhật dự án
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
            <div className="mx-20 py-8 px-12 rounded-md bg-blue-gray-100 mb-20">
              <div className="text-xl font-bold mb-4">
                Danh sách học sinh muốn tham gia vào dự án
              </div>
              <div className="py-3 px-4 my-4 flex justify-between bg-blue-300">
                <div className="flex items-center justify-center w-52">Tên</div>
                <div className="flex items-center justify-center w-56">
                  Địa chỉ
                </div>
                <div className="flex items-center justify-center w-32">
                  Số điện thoại
                </div>
                <div className="flex items-center justify-center w-32">
                  Trường
                </div>
                <div className="flex w-[13.2rem]"></div>
              </div>
              {projectDetail.students.map((student, key) => (
                <div
                  key={key}
                  className="px-4 my-4 rounded-xl bg-green-300 flex justify-between"
                >
                  <div
                    className="py-3 flex justify-between gap-[5.2rem] cursor-pointer"
                    onClick={() => setIsStudentDetail(true)}
                  >
                    <div className="flex items-center justify-center w-52">
                      {student.fullName}
                    </div>
                    <div className="flex items-center justify-center w-56">
                      {student.address}
                    </div>
                    <div className="flex items-center justify-center w-32">
                      {student.phoneNumber}
                    </div>
                    <div className="flex items-center justify-center w-36 mr-12">
                      {student.universityName}
                    </div>
                  </div>
                  <div className="py-3 flex">
                    <Button
                      className=""
                      onClick={() => {
                        handleApprove(student.id);
                      }}
                    >
                      Chấp thuận
                    </Button>
                    <Button
                      className="ml-3"
                      onClick={() => {
                        handleReject(student.id);
                      }}
                    >
                      Từ chối
                    </Button>
                  </div>

                  <div>
                    {isStudentDetail && (
                      <div className="fixed z-1000 inset-0 bg-opacity-50 bg-white">
                        <div className="mt-12 ml-8 text-2xl font-bold">Chi tiết học sinh</div>
                        <div className="grid grid-cols-2 mx-72 my-40 py-12 px-8 bg-white h-fit">
                          <div className="">
                            <dl className="max-w-[400px] text-gray-900 divide-y divide-gray-400 ">
                              <div className="flex flex-col pb-3">
                                <dt className="mb-1 text-gray-500 md:text-lg ">
                                  Tên học sinh
                                </dt>
                                <dd className="text-lg font-semibold">
                                  {student.fullName}
                                </dd>
                              </div>
                              <div className="flex flex-col py-3">
                                <dt className="mb-1 text-gray-500 md:text-lg ">
                                  Giới Tính
                                </dt>
                                <dd className="text-lg font-semibold">
                                  {student.isMale ? "Nam" : "Nữ"}
                                </dd>
                              </div>
                              <div className="flex flex-col pt-3">
                                <dt className="mb-1 text-gray-500 md:text-lg ">
                                  Số điện thoại
                                </dt>
                                <dd className="text-lg font-semibold">
                                  {student.phoneNumber}
                                </dd>
                              </div>
                            </dl>
                          </div>
                          <div>
                            <dl className="max-w-md text-gray-900 divide-y divide-gray-400  ">
                              <div className="flex flex-col pb-3">
                                <dt className="mb-1 text-gray-500 md:text-lg ">
                                  Tên Trường
                                </dt>
                                <dd className="text-lg font-semibold">
                                  {student.universityName}
                                </dd>
                              </div>
                              <div className="flex flex-col py-3">
                                <dt className="mb-1 text-gray-500 md:text-lg ">
                                  Địa chỉ
                                </dt>
                                <dd className="text-lg font-semibold">
                                  {student.address}
                                </dd>
                              </div>
                              <div className="flex flex-col pt-3">
                                <dt className="mb-1 text-gray-500 md:text-lg ">
                                  Mô tả
                                </dt>
                                <dd className="text-lg font-semibold">
                                  {student.personalDescription}
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                        <div
                          className="absolute top-5 right-10 text-2xl font-bold text-black cursor-pointer"
                          onClick={() => {
                            setIsStudentDetail(false);
                          }}
                        >
                          X
                        </div>
                      </div>
                    )}
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

      <div className="mx-20 py-8 px-12 rounded-md bg-blue-gray-300 mb-40">
        <div className="text-xl font-bold mb-4">
          Danh sách học sinh đã được chấp thuận tham gia vào dự án
        </div>
        <div>{studentApprove && studentApprove.map((student) => {
          return (
            <div key={student.id} className="px-4 my-4 rounded-2xl bg-blue-400 flex justify-between">
              <div className="py-3 flex justify-between gap-[5.2rem] cursor-pointer">
                <div className="flex items-center justify-center w-52">{student.fullName}</div>
                <div className="flex items-center justify-center w-56">{student.address}</div>
                <div className="flex items-center justify-center w-32">{student.phoneNumber}</div>
                <div className="flex items-center justify-center w-40 mr-12">{student.universityName}</div>
              </div>
            </div>
          );
        })}</div>
      </div>
    </div>
  );
};

export default CommunityLeaderProjectDetail;
