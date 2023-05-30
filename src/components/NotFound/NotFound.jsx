import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center py-5">
      <h3 className="py-5">Page Not Found</h3>
      <h4>
        Go To <NavLink to="/">Home Pgae</NavLink>
      </h4>
    </div>
  );
};

export default NotFound;
