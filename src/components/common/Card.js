import dateFormatter from "../utils/dateFormatter";

const Card = ({ userData }) => {
  if (!userData)
    return (
      <h1 style={{ color: "#e6edf3" }}
        className="p-4 text-center"
      >
        Please search for users via the search bar above
      </h1>
    );
  return (
    <div className="card">
      <div className="card-header">
        <img src={userData.avatar_url} alt="avatar" className="avatar" />
        <h2 title={userData.name}>{userData.name}</h2>
      </div>
      <div className="card-body">
        <div>
          <div className="text-center bio">"{userData.bio}"</div>
          <div className="text-end">- {userData.login}</div>
        </div>
        <ul>
          <li>
            <strong>Created At: </strong>
            {dateFormatter(userData.created_at)}
          </li>
          <li>
            <strong>No. of Public Repos.: </strong>
            {userData.public_repos}
          </li>
          <li>
            <strong>No. of Public Gists: </strong>
            {userData.public_gists}
          </li>
        </ul>
      </div>
      <div className="card-footer">
        <button onClick={() => window.open(userData.html_url, "_blank")}>
          Visit Profile
        </button>
      </div>
    </div>
  );
};

export default Card;
