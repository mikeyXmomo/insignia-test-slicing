const Navbar = () => {
  return (
    <div className="container background-red">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand font-gold background-red" href="#">
            <strong>Social</strong> Network
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i
                className="fa fa-bars"
                style={{ color: "#f4e3cf", fontSize: "28px" }}
              ></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-lg-3 ms-lg-3 m-md-0 mt-lg-2 my-sm-2">
                <div className="input-group mt-1 py-1">
                  <div className="form-outline ">
                    <input
                      type="search"
                      id="form1"
                      placeholder="Find"
                      className="form-control background-gold"
                    />
                  </div>
                  <button type="button" className="btn background-gold ">
                    <i className="fa fa-search font-red"></i>
                  </button>
                </div>
              </li>
              <li className="nav-item my-2 mx-lg-2 my-md-3 d-sm-inline">
                <button
                  className="btn background-gold px-6 py-2 font-red"
                  type="submit"
                >
                  <i className="fa fa-upload me-2 font-red"></i>
                  Upload
                </button>
                <button
                  className="btn background-gold d-md-none mx-lg-2 mx-2 mx-md-0 px-6 py-2 font-red"
                  type="submit"
                >
                  <i className="fa fa-user me-2 font-red"></i>
                </button>
                <span className="d-md-none d-sm-inline">
                  <span className="font-gold">Washem </span>
                  <span className="font-gold">Arhad</span>
                </span>
              </li>
              <li className="nav-item my-2 my-lg-3 d-none d-md-block">
                <button className="btn background-gold mx-lg-2 px-3 py-2">
                  <i className="fa fa-user font-red"></i>
                </button>
              </li>
              <li className="nav-item my-2 my-lg-3 ">
                <div className="d-none d-md-block ">
                  <p className="font-gold">Washem </p>
                  <p className="font-gold">Arhad</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
