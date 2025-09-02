import React from "react";
import "./Navigation.css";

function Navigation({ onRouteChange, isSignedIn }) {
  if (isSignedIn) {
    return (
      <nav>
        <div className="navigation-routes">
          <p onClick={()=>onRouteChange("signout")}>Sign out</p>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="navigation-routes">
          <p onClick={()=>onRouteChange("signin")}>Sign In</p>
          <p onClick={()=>onRouteChange("register")}>Register</p>
        </div>
      </nav>
    );
  }
}
export default Navigation;
