import { useEffect, useState } from "react";
import Channel from "./Channel";

const PeopleAndDocuments = () => {
  const [channelPhotos, setchannelPhotos] = useState([]);
  const [peoplePhotos, setpeoplePhotos] = useState([]);

  useEffect(() => {
    const getAllPhotos = async (params) => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_KEY}&query=twitter&orientation=landscape`
      );

      const data = await response.json();
      setchannelPhotos(data.results);
      return data;
    };

    const getAllPeoplePhotos = async (params) => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_KEY}&query=people}&orientation=landscape`
      );

      const data = await response.json();
      setpeoplePhotos(data.results);
      return data;
    };

    getAllPhotos();
    getAllPeoplePhotos();
  }, []);
  return (
    <div className="container mt-md-5">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h3 className="font-gold">People</h3>
            <p className="font-gold end-0">View All</p>
          </div>
        </div>
        <div className="col-md-3 offset-md-3">
          <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between align-items-start d-none d-sm-flex">
            <h3 className="font-gold d-none d-md-block">Channel</h3>
            <p className="font-gold end-0 fw-light me-md-2">
              View All Channels
            </p>
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
                backgroundImage: `url(${peoplePhotos[0]?.urls?.regular})`,
              }}
            >
              <div className="h-100 d-flex justify-content-end flex-column p-3">
                <div className="d-flex justify-content-start align-items-end">
                  <p className="fw-bold font-red fs-4">
                    {peoplePhotos[0]?.description}
                  </p>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <p className="fw-normal font-red">
                    {peoplePhotos[0]?.user?.name}
                  </p>
                  <p className="fw-normal font-red">
                    {peoplePhotos[0]?.user?.total_likes} Views
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
                  backgroundImage: `url(${peoplePhotos[1]?.urls?.regular})`,
                }}
              >
                <div className="h-100 d-flex justify-content-end flex-column p-3">
                  <div className="d-flex flex-row justify-content-between">
                    <p className="fw-bold font-red">
                      {peoplePhotos[1]?.user?.name}
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
                    backgroundImage: `url(${peoplePhotos[2]?.urls?.regular})`,
                  }}
                >
                  <div className="h-100 d-flex justify-content-end flex-column p-3">
                    <div className="d-flex flex-row justify-content-between">
                      <p className="fw-bold font-red">
                        {peoplePhotos[2]?.user?.name}
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
              backgroundImage: `url(${peoplePhotos[4]?.urls?.regular})`,
            }}
          >
            <div className="h-100 d-flex justify-content-end flex-column p-3">
              <div className="d-flex flex-row justify-content-between">
                <p className="fw-bold font-red">
                  {peoplePhotos[4]?.user?.name}
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-12 mb-3 background-gold"
            style={{
              height: "204px",
              backgroundImage: `url(${peoplePhotos[5]?.urls?.regular})`,
            }}
          >
            <div className="h-100 d-flex justify-content-end flex-column p-3">
              <div className="d-flex flex-row justify-content-between">
                <p className="fw-bold font-red">
                  {peoplePhotos[5]?.user?.name}
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
              <div className="d-flex flex-row flex-md-column flex-lg-row justify-content-center">
                <i className="fa fa-podcast font-gold circle-icon"></i>
                <p className="fw-normal fs-5 ms-2 mt-1 font-gold">
                  Show Your Work
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="col-12 offset-md-3">
            <div className="d-flex flex-row justify-content-between align-items-center d-md-none d-sm-flex">
              <h3 className="font-gold">Channels</h3>
              <p className="font-gold end-0 fw-light me-md-2">
                Browse All Channel
              </p>
            </div>
          </div>
          <hr className="font-gold mt-n2 p-0 w-100 ms-md-2 bold" />
          <div className="row g-lg-4 mb-lg-4" style={{ marginLeft: "1px" }}>
            {channelPhotos.length !== 0 &&
              channelPhotos.map((photo) => (
                <Channel
                  image={photo.urls.regular}
                  name={photo.user.username}
                  key={photo.id}
                />
              ))}
          </div>
          <hr className="font-gold mt-n2 p-0 w-100 ms-md-2 bold" />
        </div>
      </div>
    </div>
  );
};

export default PeopleAndDocuments;
