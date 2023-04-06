import { getAccessToken, getUserData } from "../api";
import { useContext, useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import { UserContext } from "../context/user.context";

type ProtectedRouteProps = {
  element?: JSX.Element;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const accessToken = localStorage.getItem("accessToken");
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (accessToken) {
      getUserDetails();
    } else {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const codeParam = urlParams.get("code");

      if (codeParam) {
        getAccessToken(codeParam)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (data.error) {
              window.location.href = "/login";
            } else {
              localStorage.setItem("accessToken", data.access_token);
              getUserDetails();
            }
          });
      } else {
        window.location.href = "/login";
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserDetails = () => {
    setLoading(true);
    getUserData()
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        if (data.message === "Bad credentials") {
          localStorage.removeItem("accessToken");
          window.location.href = "/login";
        }

        setUser(data);
      });
  };

  return !loading ? <Outlet /> : <>Loading....</>;
};

export default ProtectedRoute;
