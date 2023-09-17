const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={""} alt="" className="avatar skeleton" />
        <h2 className="skeleton skeleton-text">{}</h2>
      </div>
      <div className="card-body">
        <div>
          <div className="bio skeleton skeleton-text"></div>
          <div className="flex justify-end username">
            <div className="skeleton skeleton-text"></div>
          </div>
        </div>
        <ul>
          <li className="skeleton skeleton-text"></li>
          <li className="skeleton skeleton-text"></li>
          <li className="skeleton skeleton-text"></li>
        </ul>
      </div>
      <div className="card-footer">
        <button>
          <div className="skeleton skeleton-text"></div>
        </button>
      </div>
    </div>
  );
};

export default Card;
