import { Link } from "react-router-dom";

const AppMenuBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">MERN App</span>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link active">
              Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { AppMenuBar };
