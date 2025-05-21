import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <NavLink to="/" className="navbar-link" data-nav-link>
          A propos
        </NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/resume" className="navbar-link" data-nav-link>
        CV
        </NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/portfolio" className="navbar-link" data-nav-link>
          Portfolio
        </NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/veille_technologique" className="navbar-link" data-nav-link>
          Veille technologique
        </NavLink>
      </li>

      

      <li className="navbar-item">
        <NavLink to="/contact" className="navbar-link" data-nav-link>
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar