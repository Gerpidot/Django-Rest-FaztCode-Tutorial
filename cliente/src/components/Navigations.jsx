import React from "react";
import { Link } from "react-router-dom";

const Navigations = () => {
  return (
    <div>
      <Link to={"tasklist"}>Task List </Link>
      <Link to={"/taskpost"}>Create Post</Link>
    </div>
  );
};

export default Navigations;
