import React from "react";
import "./App.css";
import { BasketPanel } from "./feature/basket/BasketPanel";
import { BasketToolbar } from "./feature/basket/BasketToolbar";
import { BrandsPanel } from "./feature/brands/BrandsPanel";
import { FilterPanel } from "./feature/filter/FilterPanel";
import { ProductListPanel } from "./feature/productList/ProductListPanel";
import { SortingPanel } from "./feature/sorting/SortingPanel";
import { TagsPanel } from "./feature/tags/TagsPanel";

export const App = () => {
  return (
    <div className="app">
      <div className="header">
        <img src={"Logo.png"} alt="logo" />
        <BasketToolbar/>
      </div>
      <div className="app-body">
        <div className="left side column">
          <SortingPanel />
          <BrandsPanel />
          <TagsPanel />
        </div>
        <div className="middle column">
          <div>Products</div>
          <FilterPanel />
          <ProductListPanel />
        </div>
        <div className="right side column">
          <BasketPanel />
        </div>
      </div>
      <div className="footer">©2019 Market • Privacy Policy</div>
    </div>
  );
};
