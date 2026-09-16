import logo from "../../assets/Logo-26-08-2026/Logo1-full.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

     
          <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" />

          </Link>
      

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">

            <li className="nav-item">
            
                <Link  className="nav-link active" to="home">Home</Link>
               
           
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Plans
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/companies">
                  Velnoxa
                  </Link>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>

            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;