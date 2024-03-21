import images from "~/assets";
import { Link } from "react-router-dom";

const ProjectItem = ({ activities }) => {
  return (
    <div className="">
      {activities && activities.map((activity) => (
          <Link
            to={`project-detail/${activity.id}`}
            key={activity.id}
            className="w-full my-5 grid grid-cols-10" >
              
            <div className="col-span-2">
              <img src={images.muahexanh} className="w-full h-64 rounded-lg" />
            </div>
            <div className="col-span-8 ml-4 font-medium flex flex-col gap-3">
              <h1 className="text-2xl font-bold">{activity.title}</h1>
              <h2>Trạng thái: {activity.status.toUpperCase()}</h2>
              <div className="flex">
                <p>Ngày bắt đầu: {activity.dateStart}</p>
                <p className="ml-10">Ngày kết thúc: {activity.dateEnd}</p>
              </div>
              <p>Số lượng tối đa được đăng ký: {activity.maxProjectMembers}</p>
              <p>Số lượng trường: {activity.maxSchoolRegistrations}</p>
              <p>Địa điểm: {activity.address}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ProjectItem;
