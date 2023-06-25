import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import "./NavLinks.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <Link to="/users">
          Community
        </Link>
      </li>
      {auth.isLoggedIn && (
        <li>
          <Link to={`/${auth.userId}/places`}>My places</Link>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <Link to="/places/new">Add place</Link>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <Link to="/auth">Login | Sign Up</Link>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout} id="logout_btn">
            Logout
          </button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
