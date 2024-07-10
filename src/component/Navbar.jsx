import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Navbar() {

    const items = useSelector((state)=> state.cart)

  return (
    <div className="mainnav">
        <span>product logo</span>
      <div className="nav">
        <Link className="navlink" to={"/"}> Home</Link>
        <Link className="navlink" to={"/cart"}>Cart</Link>
        <span>items: {items.length}</span>
      </div>
    </div>
  );
}

export default Navbar;
