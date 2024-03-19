import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import images from "~/assets";
import Context from "~/store/Context";

const Header = () => {
  const { loginState } = useContext(Context);

  return (
    <>
      <div className="px-20 py-2 flex justify-between">
        <div>
          <img src={images.logo} className="w-[4.2rem] h-20" />
        </div>
        <div className="flex items-center justify-end mr-4 sm:mr-0">
          <div className="sm:block grid mr-2">
            <div className="text-sm">Hello!</div>
            <div className="font-bold text-lg">
              {loginState.loginData.fullName}
            </div>
          </div>

          <div>
            <div id="avatar" className="bg-black rounded-full w-10 h-10"></div>
            <div
              id="dropdown"
              className="hidden absolute right-0 mx-2 md:mx-56 mt-2 border-2 border-gray-200 p-4 w-48 bg-white shadow-xl rounded-md"
            >
              <ul>
                <li>
                  <form action="Logout">
                    <div className="focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
                      <i className="fa-solid fa-arrow-right-from-bracket mr-3 text-red-800"></i>
                      <input type="submit" value="Log out" />
                    </div>
                  </form>
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
