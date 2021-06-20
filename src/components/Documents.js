import { useEffect, useState } from "react";

const VideoSection = () => {
  const [documentPhotos, setdocumentPhotos] = useState([]);

  useEffect(() => {
    const getAllPhotos = async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_KEY}&query=documents&orientation=landscape`
      );

      const data = await response.json();
      setdocumentPhotos(data.results);
      console.log(data.results);
      return data;
    };

    getAllPhotos();
  }, []);
  return (
    <div className="container mt-md-5">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h3 className="font-gold">Documents</h3>
            <p className="font-gold end-0">Browse All Documents</p>
          </div>
        </div>
      </div>
      <div className="row mx-1">
        <div className="col-md-6">
          <div className="row mb-3 me-md-2 me-md-2">
            <div
              className="col-md-12 background-gold p-0"
              style={{
                height: "420px",
                backgroundImage: `url(${documentPhotos[0]?.urls?.regular})`,
              }}
            >
              <div className="h-100 d-flex justify-content-end flex-column p-3">
                <div className="d-flex justify-content-start align-items-end">
                  <p className="fw-bold font-red fs-4">
                    {documentPhotos[0]?.description}
                  </p>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <p className="fw-normal font-red">
                    {documentPhotos[0]?.user?.name}
                  </p>
                  <p className="fw-normal font-red">
                    {documentPhotos[0]?.user?.total_likes}
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
                  backgroundImage: `url(${documentPhotos[1]?.urls?.regular})`,
                }}
              >
                <div className="h-100 d-flex justify-content-end flex-column p-3">
                  <div className="d-flex flex-column justify-content-start">
                    <p className="fw-normal font-red">
                      {documentPhotos[1]?.user?.name}
                    </p>
                    <p className="fw-normal font-red">
                      {documentPhotos[1]?.user?.total_likes} Views
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 ps-0 pe-md-3 pe-md-2 pe-0 mb-3"
              style={{ height: "208px" }}
            >
              <div className=" background-gold" style={{ height: "208px" }}>
                <div
                  className=" background-gold"
                  style={{
                    height: "208px",
                    backgroundImage: `url(${documentPhotos[2]?.urls?.regular})`,
                  }}
                >
                  <div className="h-100 d-flex justify-content-end flex-column p-3">
                    <div className="d-flex flex-column justify-content-start">
                      <p className="fw-normal font-red">
                        {documentPhotos[2]?.user?.name}
                      </p>
                      <p className="fw-normal font-red">
                        {documentPhotos[2]?.user?.total_likes} Views
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
              backgroundImage: `url(${documentPhotos[4]?.urls?.regular})`,
            }}
          >
            <div className="h-100 d-flex justify-content-end flex-column p-3">
              <div className="d-flex flex-column justify-content-start">
                <p className="fw-normal font-red">
                  {documentPhotos[4]?.user?.name}
                </p>
                <p className="fw-normal font-red">
                  {documentPhotos[4]?.user?.total_likes} Views
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-12 mb-3 background-gold"
            style={{
              height: "204px",
              backgroundImage: `url(${documentPhotos[5]?.urls?.regular})`,
            }}
          >
            <div className="h-100 d-flex justify-content-end flex-column p-3">
              <div className="d-flex flex-column justify-content-start">
                <p className="fw-normal font-red">
                  {documentPhotos[5]?.user?.name}
                </p>
                <p className="fw-normal font-red">
                  {documentPhotos[5]?.user?.total_likes} Views
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
                <i className="fa fa-plus font-gold circle-icon"></i>
                <p className="fw-normal fs-5 ms-2 mt-1 font-gold">
                  Share Your Documents
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
