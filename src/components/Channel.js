const Channel = ({ image, name }) => {
  return (
    <div className="col-6">
      <div
        style={{
          width: "100%",
          height: "80px",
          backgroundImage: `url(${image})`,
        }}
        className="my-lg-1 my-2 my-md-0"
      >
        <div className="h-100 d-flex justify-content-end flex-column p-1">
          <div className="d-flex justify-content-start align-items-end">
            <p className="fw-bold font-red">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
