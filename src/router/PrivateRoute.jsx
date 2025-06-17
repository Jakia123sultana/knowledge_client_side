import React, { use } from "react";

import { Navigate, useLocation } from "react-router";

import { AuthContext } from "../Provider/AuthProvider";
import Loading from "./Loading";



const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  //   console.log(user);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <Loading/>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/signIn"></Navigate>;

  //if-> user thake return children
  // navigate--> Login
};

export default PrivateRoute;