import { UserContext } from "../context/user.context";
import { useContext } from "react";

const TopBar = () => {
  const { user } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
  };

  return (
    <div className="topbar">
      <div className="container">
        <div className="logo">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "/cloudy.png"}
            alt="Logo"
          />
          <p>Weather Forecast</p>
        </div>
        {user && (
          <div className="profile-container">
            <div className="profile">
              <img className="logo" src={user?.avatar_url} alt="Logo" />
              {user?.login}
            </div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
