import { TopBar } from "../components";
import { useEffect } from "react";

const Login = () => {
  const handleLogin = () => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_REDIRECT_URI;
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;

    window.location.href = githubAuthUrl;
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) window.location.href = "/";
  }, []);

  return (
    <div>
      <TopBar />
      <div className="login-container">
        <p>
          Welcome to the weather forecast web application. PLease login with
          your Github user to use the application and view the weather in your
          city.
        </p>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
