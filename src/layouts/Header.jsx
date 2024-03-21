import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import images from "~/assets";
import { useAuth } from "~/hooks";

const Header = () => {
  const { auth } = useAuth();
  const [showOptions, setShowOptions] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(["userCookie"]);

  const HandleSubmit = () => {
    removeCookie("userCookie");
    history.push("/");
  };

  return (
    <>
      <div className="px-20 py-2 flex justify-between">
      <Link to={auth.role === "CommunityLeader" ? "/community-leader" : auth.role === "student" ? "/student" : "/university"}>
    <img src={images.logo} className="w-[4.2rem] h-20" alt="Logo" />
      </Link>

        <div className="flex items-center justify-end mr-4 sm:mr-0">
          <div className="sm:block grid mr-2">
            <div className="text-sm">{auth.role}</div>
            {auth.role === "CommunityLeader" ? (
              <div className="font-bold text-lg">{auth.fullName}</div>
            ) : <div className="font-bold text-lg">{auth.full_name}</div>}
          </div>

          <div>
            <button onClick={() => setShowOptions((prev) => !prev)}>
              <div
                id="avatar"
                className="bg-black rounded-full w-10 h-10"
              ></div>
            </button>

            <div
              id="dropdown"
              className={`${
                showOptions ? "" : "hidden"
              } absolute right-0 mx-20  mt-2 border-2 border-gray-200 p-4 w-48 bg-white shadow-xl rounded-md`}
            >
              <ul>
                <li>
                  <form onSubmit={HandleSubmit}>
                    <button
                      className="focus:ring transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer w-full text-left"
                      type="submit"
                    >
                      <i className="fa-solid fa-arrow-right-from-bracket mr-3 text-red-800"></i>
                      Log out
                    </button>
                  </form>
                </li>
                <li>
                  <Link to={`/profile/${auth.id}`}>
                    <button
                      className="mt-4 focus:ring transform transition hover:scale-105 duration-300 ease-in-out cursor-pointer w-full text-left"
                      type="submit"
                    >
                      <i className="fa-solid fa-arrow-right-from-bracket mr-3 text-red-800"></i>
                      Profile
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
