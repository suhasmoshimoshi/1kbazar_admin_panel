import { useEffect } from "react";
import Router from "next/router";

function withAuth(WrappedComponent) {
  return function (props) {
    useEffect(() => {
      const jwt = localStorage.getItem("jwt"); // get the JWT from local storage
      if (jwt) {
        Router.push("/protected"); // redirect to the protected page if the JWT is present and valid
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
