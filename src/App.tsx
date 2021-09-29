import React from "react";
import "./App.css";
import { BrandsPanel } from "./feature/brands/BrandsPanel";
import { SortingPanel } from "./feature/sorting/SortingPanel";
import { TagsPanel } from "./feature/tags/TagsPanel";

export const App = () => {
  return (
    <div className="app">
      <div className="header">
        <img src={"Logo.png"} alt="logo" />
      </div>
      <div className="app-body">
        <div className="left side column">
          <SortingPanel />
          <BrandsPanel />
          <TagsPanel />
        </div>
        <div className="middle column"></div>
        <div className="right side column"></div>
      </div>
      <div className="footer">©2019 Market • Privacy Policy</div>
    </div>
  );
};
