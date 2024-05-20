import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const [userName, setUserName] = useState("Layomi1");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubProfileData() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      if (data) {
        setUserData(data);
        setLoading(false);
        setUserName("");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchGithubProfileData();
  }, []);

  function handleSearch() {
    if (userName.trim() !== "") {
      fetchGithubProfileData();
    }
  }

  return (
    <div className="App">
      <div className="github-input">
        <label htmlFor="username"></label>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading && <h1>Loading Data. Please, wait!</h1>}
      {error && <h1>{error}</h1>}
      {userData && <Card user={userData} />}
    </div>
  );
}

export default App;
