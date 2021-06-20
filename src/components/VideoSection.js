import { useEffect, useState } from "react";
import Activity from "./Activity";

const VideoSection = () => {
  const [videoPhotos, setvideoPhotos] = useState([]);
  const [activity, setactivity] = useState([]);

  useEffect(() => {
    const getAllPhotos = async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_KEY}&query=tutorial&orientation=landscape`
      );

      const data = await response.json();
      setvideoPhotos(data.results);
      return data;
    };

    const getAllActivityPhotos = async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_KEY}&orientation=landscape&query=random`
      );

      const data = await response.json();
      setactivity(data.results);
      return data;
    };

    getAllPhotos();
    getAllActivityPhotos();
  }, []);
  return (
    <div className="container mt-md-5">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h3 className="font-gold">Videos</h3>
            <p className="font-gold end-0">Browse All Videos</p>
          </div>
        </div>
        <div className="col-md-3 offset-md-3">
          <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between align-items-start d-none d-sm-flex">
            <h3 className="font-gold">Activity</h3>
            <p className="font-gold end-0 fw-light me-md-2">View Timeline</p>
          </div>
        </div>
      </div>
      <div className="row mx-1">
        <div className="col-md-6">
          <div className="row mb-3 me-md-2">
            <div
              className="col-md-12 background-gold p-0"
              style={{
                height: "420px",
                backgroundImage: `url(${videoPhotos[0]?.urls?.regular})`,
              }}
            >
              <div className="h-100 d-flex justify-content-end flex-column p-3">
                <div className="d-flex justify-content-start align-items-end">
                  <p className="fw-bold font-red fs-4">
                    {videoPhotos[0]?.description}
                  </p>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <p className="fw-normal font-red">
                    {videoPhotos[0]?.user?.name}
                  </p>
                  <p className="fw-normal font-red">
                    {videoPhotos[0]?.user?.total_likes} Views
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ps-0 pe-0 pe-md-3 mb-3">
              <div
                className=" background-gold"
                style={{
                  height: "208px",
                  backgroundImage: `url(${videoPhotos[1]?.urls?.regular})`,
                }}
              >
                <div className="h-100 d-flex justify-content-end flex-column p-3">
                  <div className="d-flex flex-row justify-content-between">
                    <p className="fw-light font-red">
                      {videoPhotos[1]?.user?.name}
                    </p>
                    <p className="fw-light font-red">
                      {videoPhotos[1]?.user?.total_likes} Views
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 ps-0 pe-md-3 pe-0 mb-3"
              style={{ height: "208px" }}
            >
              <div className=" background-gold" style={{ height: "208px" }}>
                <div
                  className=" background-gold"
                  style={{
                    height: "208px",
                    backgroundImage: `url(${videoPhotos[2]?.urls?.regular})`,
                  }}
                >
                  <div className="h-100 d-flex justify-content-end flex-column p-3">
                    <div className="d-flex flex-row justify-content-between">
                      <p className="fw-light font-red">
                        {videoPhotos[2]?.user?.name}
                      </p>
                      <p className="fw-light font-red">
                        {videoPhotos[2]?.user?.total_likes} Views
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-0">
          <div
            className="col-md-12 mb-3 background-gold"
            style={{
              height: "204px",
              backgroundImage: `url(${videoPhotos[4]?.urls?.regular})`,
            }}
          >
            <div className="h-100 d-flex justify-content-end flex-column p-3">
              <div className="d-flex flex-row justify-content-between">
                <p className="fw-light font-red">
                  {videoPhotos[4]?.user?.name}
                </p>
                <p className="fw-light font-red">
                  {videoPhotos[4]?.user?.total_likes} Views
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-12 mb-3 background-gold"
            style={{
              height: "204px",
              backgroundImage: `url(${videoPhotos[5]?.urls?.regular})`,
            }}
          >
            <div className="h-100 d-flex justify-content-end flex-column p-3">
              <div className="d-flex flex-row justify-content-between">
                <p className="fw-light font-red">
                  {videoPhotos[5]?.user?.name}
                </p>
                <p className="fw-light font-red">
                  {videoPhotos[5]?.user?.total_likes} Views
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-12 mb-3"
            style={{
              height: "204px",
              border: "2px solid #f4e3cf ",
            }}
          >
            <div className="h-100 d-flex justify-content-center flex-column p-3">
              <div className="d-flex flex-row flex-md-column flex-lg-row  justify-content-center">
                <i className="fa fa-arrow-circle-up font-gold circle-icon"></i>
                <p className="fw-normal fs-5 ms-2 mt-1 font-gold">
                  Upload Your Own Data
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="col-12 offset-md-3">
            <div className="d-flex flex-row justify-content-between align-items-center d-md-none d-sm-flex">
              <h3 className="font-gold">Activity</h3>
              <p className="font-gold end-0 fw-light me-md-2">View Timeline</p>
            </div>
          </div>
          <hr className="font-gold mt-n2 p-0 w-100 ms-md-2 bold" />
          {activity.length !== 0 &&
            activity
              .slice(1)
              .map((photo) => (
                <Activity
                  date={photo.created_at}
                  name={photo.user.name}
                  description={photo.description}
                  image={photo.urls.regular}
                  key={photo.id}
                />
              ))}
          <hr className="font-gold mt-n2 p-0 w-100 ms-md-2 bold" />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
