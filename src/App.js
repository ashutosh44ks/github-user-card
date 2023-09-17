import { useState } from "react";
import axios from "axios";
import Header from "./components/common/Header";
import Card from "./components/common/Card";
import PlaceholderCard from "./components/common/PlaceholderCard";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getUserData = async (username) => {
    if (!username) return;
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(data);
      setError(null);
      console.log(data);
    } catch (err) {
      console.log(err);
      console.log(err.response.data.message);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    setLoading(false);
  };

  return (
    <div>
      <Header getUserData={getUserData} error={error} />
      <main>
        {loading ? <PlaceholderCard /> : <Card userData={userData} />}
      </main>
    </div>
  );
}

export default App;
