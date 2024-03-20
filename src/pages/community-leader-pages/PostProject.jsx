import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "~/hooks";
import axios from "~/api/axios";

const PostProject = () => {
  const auth = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    description: "",
    max_project_members: 0,
    max_school_registrations_members: 0,
    status: "",
    date_start: new Date(),
    date_end: new Date(),
    thumbnail: null,
  });

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear().toString().slice(-2); // Get last two digits of the year
    const month = (d.getMonth() + 1).toString().padStart(2, "0"); // Ensure month is two digits
    const day = d.getDate().toString().padStart(2, "0"); // Ensure day is two digits
    return `${year}/${month}/${day}`;
  };
  const handleSubmit = async (e) => {
    const postFormData = new FormData();
    e.preventDefault();
    {
      postFormData.append("title", formData.title);
      postFormData.append("address", formData.address);
      postFormData.append("description", formData.description);
      postFormData.append("max_project_members", formData.max_project_members);
      postFormData.append(
        "max_school_registrations_members",
        formData.max_school_registrations_members
      );
      postFormData.append("status", "pending");
      postFormData.append("date_start", formData.date_start);
      postFormData.append("date_end", formData.date_end);
      postFormData.append("img_root", formData.thumbnail.name);
    }
    console.log("start data: ", formData.date_start);
    console.log("end data: ", formData.date_start);
    try {
      await axios.post(
        `/api/communityleader/createProject?communityLeaderId=${auth.auth.id}`,
        postFormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        console.log(postFormData)
      );
      console.log("Success submitting form");
      setFormData(() => ({
        title: "",
        address: "",
        description: "",
        max_project_members: 0,
        max_school_registrations_members: 0,
        status: "",
        date_start: "",
        date_end: "",
        thumbnail: null,
      }));
      console.log("Form data: ", formData);
    } catch (error) {
      console.log("Error submitting form: ", error);
    }
    // window.location.reload();
  };

  const handleInputChange = (e) => {
    const { type, name } = e.target;
    if (type === "file") {
      const file = e.target.files[0];
      if (file) {
        setFormData({
          ...formData,
          [name]: file,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: e.target.value,
      });
    }
  };

  return (
    <div className="py-28">
      <form
        className="max-w-md mx-auto p-5 rounded border-2 shadow-lg bg-white"
        onSubmit={handleSubmit}
      >
        <h1 className="py-3 text-center text-2xl uppercase text-green-500">
          Mùa hè xanh
        </h1>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="title"
            id="title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            value={FormData.title}
            required
            onChange={handleInputChange}
          />
          <label
            htmlFor="title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="address"
            id="address"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={FormData.address}
            onChange={handleInputChange}
            required
          />
          <label
            htmlFor="address"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Address
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <textarea
            type="text"
            name="description"
            id="description"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={handleInputChange}
            value={FormData.description}
          />
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="max_project_members"
              id="max_project_members"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleInputChange}
              min="0"
              value={FormData.max_project_members}
            />
            <label
              htmlFor="max_project_members"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Number of students
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="max_school_registrations_members"
              id="max_school_registrations_members"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleInputChange}
              min="0"
              value={FormData.max_school_registrations_members}
            />
            <label
              htmlFor="max_school_registrations_members"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Max school members
            </label>
          </div>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="status"
            id="status"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={handleInputChange}
            value="pending"
          />
          <label
            htmlFor="status"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Status
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="date"
              name="date_start"
              id="date_start"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={FormData.date_start}
              onChange={handleInputChange}
            />
            <label
              htmlFor="date_start"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Start time
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="date"
              name="date_end"
              id="date_end"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={FormData.date_end}
              onChange={handleInputChange}
            />
            <label
              htmlFor="date_end"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              End time
            </label>
          </div>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="file"
            name="thumbnail"
            id="thumbnail"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            accept="image/*"
            onChange={handleInputChange}
          />
          <label
            htmlFor="thumbnail"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Thumbnail
          </label>
        </div>
        <div className="flex flex-row-reverse space-x-4 space-x-reverse">
          <button
            type="submit"
            className="text-black border-2 shadow-lg hover:bg-red-800 hover:text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-red-800 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostProject;
