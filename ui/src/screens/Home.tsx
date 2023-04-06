import { TopBar } from "../components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const handleSeatch = () => {
    if (city) {
      navigate("/" + city);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleSeatch();
    }
  };

  return (
    <div>
      <TopBar />
      <div className="search-box">
        <input
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSeatch}>Display Weather</button>
      </div>
    </div>
  );
};

export default Home;
