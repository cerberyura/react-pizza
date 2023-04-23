import React from "react";
import Header from "../Component/Header";
import {Outlet} from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Outlet/>
        </div>
      </div>
    </div>

  )
}

export default MainLayout;