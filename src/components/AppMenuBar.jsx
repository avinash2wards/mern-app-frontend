import { Link } from "react-router-dom";

const AppMenuBar = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">MERN App</span>
        <ul class="nav">
          <li class="nav-item">
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li class="nav-item">
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
