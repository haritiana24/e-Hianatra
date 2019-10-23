import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../public/images/icons/logo.png'

const GuestNav = () => {
    return (
        <nav className="navbar navbar-expand-sm px-sm-5 navBlue">
          <Link to="/">
              <img src={logo} alt=""/>
          </Link>
          <ul className="navbar-nav">
              <li className="nav-item ml-5">
                  <Link to="/signin" className="nav-link product-nav">
                      SignIn
                  </Link>
              </li>
          </ul>
          <Link to="/register" className="ml-auto">
              <button className="btn btn-outline-warning">
                  <span className="mr-2">
                      <i className="fa fa-cart-plus" /> Try it
                  </span>
              </button>
          </Link>
        </nav>
    );
};

export default GuestNav;
