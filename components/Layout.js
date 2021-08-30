import React from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className=" bg-darkGrey">
      <div
        className="relative z-50"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,.9) 1%,rgba(0,0,0,.8) 15%,rgba(0,0,0,.7) 30%,rgba(0,0,0,.6) 45%,rgba(0,0,0,.5) 60%,rgba(0,0,0,.3) 75%,transparent)",
        }}
      >
        <Nav />
      </div>
      {children}
      <Footer />
    </div>
  );
};
