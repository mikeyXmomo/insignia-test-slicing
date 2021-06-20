const Breadcrumb = () => {
  return (
    <div className="container">
      <hr className="my-2 font-gold" />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Videos</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">People</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Documents</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Event</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Communities</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Favorites</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Channels</a>
          </li>
        </ol>
      </nav>
      <hr className="my-2 font-gold" />
    </div>
  );
};

export default Breadcrumb;
