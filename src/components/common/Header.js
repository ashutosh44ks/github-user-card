import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/github.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const Header = ({ getUserData, error }) => {
  const [username, setUsername] = useState("");

  return (
    <header>
      <div className="brand">
        <Logo />
        Github
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getUserData(username);
        }}
      >
        <div className="input-container">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search by username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={error ? "error" : ""}
          />
          <button>Search</button>
        </div>
      </form>
    </header>
  );
};

export default Header;
