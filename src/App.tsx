import React, { useEffect, useState } from "react";
import "./App.css";
import { BasketPanel } from "./feature/basket/BasketPanel";
import { BasketToolbar } from "./feature/basket/BasketToolbar";
import { BrandsPanel } from "./feature/brands/BrandsPanel";
import { FilterPanel } from "./feature/filter/FilterPanel";
import { Product, ProductListPanel } from "./feature/productList/ProductListPanel";
import { SortingPanel } from "./feature/sorting/SortingPanel";
import { TagsPanel } from "./feature/tags/TagsPanel";
import { useAppSelector } from "./redux/hooks";

export const App = () => {
  const itemType = useAppSelector(state => state.filter);

  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/items?itemType=${itemType}`)
      .then((res) => res.json())
      .then(data => {
        setProductList(data);
      })
  }, [itemType])

  return (
    <div className="app">
      <div className="header">
        <img src={"Logo.png"} alt="logo" />
        <BasketToolbar />
      </div>
      <div className="app-body">
        <div className="left side column">
          <SortingPanel />
          <BrandsPanel productList={productList} />
          <TagsPanel productList={productList} />
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
