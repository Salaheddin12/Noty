import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <i className="fa fa-bars" />
      <a className="navbar-brand">Noty</a>
      <form className="form-inline">
        <i className="fa fa-search" />
      </form>
    </nav>
  );
};

export default NavBar;
