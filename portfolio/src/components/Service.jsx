const Service = ({ image, title, subtitle, borderColor }) => (
  <div className={`card service-card ${borderColor}`}>
    <img src={image} alt={title} />
    <div className="card-body">
      <h5>{title}</h5>
      <p>{subtitle}</p>
      <div className="social-icons">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
    </div>
  </div>
);

export default Service;

