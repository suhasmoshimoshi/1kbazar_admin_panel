import React from "react";
import Sidenav from "../components/sidebar/Sidenav";

function Products() {
  return (
    <div>
      <Sidenav />
      <div className="bg-black h-screen text-white">
        <div className="ml-[200px] ">Welcome to Products Page</div>
      </div>
    </div>
  );
}

export default Products;
