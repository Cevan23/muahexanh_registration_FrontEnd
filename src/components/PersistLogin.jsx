import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Outlet } from "react-router-dom";
import { useAuth } from "~/hooks";

export const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { auth, setAuth, setIsLoggedIn } = useAuth();

  const [cookies] = useCookies(["userCookie"]);
  // const navigator = useNavigate();

  useEffect(() => {
    // let isMounted = true;

    const setDataCookie = () => {
      if (cookies.userCookie) {
        setAuth({ ...cookies.userCookie });
        setIsLoggedIn(true);
        setIsLoading(false);
        return true;
      }
      setIsLoading(false);
      return false;
    };

    !auth?.email ? setDataCookie() : setIsLoading(false);
  }, []);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};
