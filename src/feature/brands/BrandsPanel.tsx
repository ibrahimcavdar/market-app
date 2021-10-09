import { Search } from "@mui/icons-material";
import {
  Checkbox, FormControl,
  FormLabel, IconButton, Input, List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Product } from "../productList/ProductListPanel";
import { toggleBrand } from "./brandSlice";

interface BrandEntry {
  brand: string;
  count: number;
}

interface Props {
  productList: Product[];
}

export const BrandsPanel = ({productList}: Props) => {
  const selectedBrands = useAppSelector(state => state.brand);

  const dispatch = useAppDispatch();
  

  const brands: Record<string, number> = {};
  productList.map((product: Product) => {
    const brand = product.manufacturer;
    brands[brand] = brands[brand] ? brands[brand] + 1 : 1;
  })

  const brandsList:BrandEntry[] = [{
    brand: "All",
    count: productList.length
  }];


  for (const [key, value] of Object.entries(brands)) {
    brandsList.push({ brand: key, count: value });
  }
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Brands</FormLabel>
        <Input
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          endAdornment={
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <Search />
            </IconButton>
          }
        />

        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            height: "10%",
            maxHeight: "17vh",
            overflow: "auto",
            bgcolor: "background.paper",
          }}
        >
          {brandsList.map((brandEntry) => {
            const labelId = `checkbox-list-label-${brandEntry}`;

            return (
              <ListItem key={brandEntry.brand} disablePadding>
                <ListItemButton
                  role={undefined}
                  onClick={()=>{
                    dispatch(toggleBrand(brandEntry.brand))
                  }}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={selectedBrands.includes(brandEntry.brand)}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`${brandEntry.brand}  (${brandEntry.count})`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </FormControl>
    </div>
  );
};
