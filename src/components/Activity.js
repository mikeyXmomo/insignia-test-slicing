import moment from "moment";
const Activity = ({ name, description, date, image }) => {
  return (
    <div className="d-flex flex-row my-md-2 ms-md-2 my-2 p-1 border-hover">
      <div
        className="background-gold"
        style={{
          width: "80px",
          height: "55px",
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="d-flex flex-column justify-content-mdcenter align-items-mdstart ms-2 mt-n2">
        <p className="fw-bold font-small font-gold">
          {name}
          <span className="font-gold font-smaller fw-light"> commented</span>
        </p>
        <p className="font-small fw-light font-gold">{description}</p>
        <p className="font-small fw-light font-gold">
          <i className="fa fa-comment"></i> {moment(date).fromNow()}
        </p>
      </div>
    </div>
  );
};

export default Activity;
