import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="card text-center">
      <div className="card-header">Featured Quote</div>
      <div className="card-body">
        <h5 className="card-title">Into the Wild</h5>
        <p className="card-text">
          Mr. Franz, I think careers are a 20th century invention and I don't
          want one.
        </p>
        <Link className="btn btn-primary" to="/products">
          Go to Quotes
        </Link>
      </div>
      <div className="card-footer text-muted">2 days ago</div>
    </div>
  );
};

export { Home };
