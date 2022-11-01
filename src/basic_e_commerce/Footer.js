import React from "react";
import { Link , NavLink} from "react-router-dom";
const Footer = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
  <p className="nav-link">Copy Right</p>
    <Link className="btn btn-outline-light" to="#">Cart item</Link>
  </div>
</nav> 
 );
}

export default Footer;