const Footer = () => {
  return (
    <div className="container mt-5">
      <hr className="font-gold" />
      <div className="my-2">
        <button className="btn background-gold mx-2 w-40">
          <i className="fa fa-twitter font-red"></i>
        </button>
        <button className="btn background-gold mx-2 w-40">
          <i className="fa fa-linkedin font-red"></i>
        </button>
        <button className="btn background-gold mx-2 w-40">
          <i className="fa fa-facebook font-red rect-icon background-gold"></i>
        </button>
      </div>
      <div aria-label="breadcrumb">
        <ol className="breadcrumb mt-5">
          <li className="breadcrumb-item-sm">
            <a href="#">Videos</a>
          </li>
          <li className="breadcrumb-item-sm">
            <a href="#">People</a>
          </li>
          <li className="breadcrumb-item-sm">
            <a href="#">Documents</a>
          </li>
          <li className="breadcrumb-item-sm">
            <a href="#">Event</a>
          </li>
          <li className="breadcrumb-item-sm">
            <a href="#">Communities</a>
          </li>
          <li className="breadcrumb-item-sm">
            <a href="#">Favorites</a>
          </li>
          <li className="breadcrumb-item-sm">
            <a href="#">Channels</a>
          </li>
        </ol>
      </div>
      <p className="font-gold mt-4">
        &copy; Copyright {new Date().getFullYear()} companyname inc
      </p>
      <div aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item-sm">
            <a href="#">Privacy</a>
          </li>
          <li className="breadcrumb-item-sm">
            <a href="#">Terms</a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Footer;
