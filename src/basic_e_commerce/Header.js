import React from "react";

import { Link , NavLink} from "react-router-dom";

const Header = () => {

return (

<nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container">
  <a className="navbar-brand" href="#">ANGLARA</a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <NavLink className="nav-link" exact to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="products">Products</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="cart">Cart</NavLink>
      </li> 
    </ul>
    </div>
    <Link className="btn btn-outline-light" to="#">Cart Items</Link>
  </div>
</nav>  

);
}

export default Header;