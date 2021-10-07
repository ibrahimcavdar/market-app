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
import { Product } from "../productList/ProductListPanel";

export const BrandsPanel = () => {
  const [brandsList, setBrandsList] = useState<Array<{ brand: string, count: number }>>([]);

  useEffect(() => {
    // todo combine this with the one in ProductListPanel
    fetch(`http://localhost:8080/items`)
      .then((res) => res.json())
      .then(data => {
        const brands: Record<string, number> = {};
        data.map((product: Product) => {
          const brand = product.manufacturer;
          brands[brand] = brands[brand] ? brands[brand] + 1 : 1;
        })

        const brandsArray = [{
          brand: "All",
          count: data.length
        }];


        for (const [key, value] of Object.entries(brands)) {
          brandsArray.push({ brand: key, count: value });
        }

        setBrandsList(brandsArray);
      });
  }, []);
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
                  //   onClick={handleToggle(value)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      //   checked={checked.indexOf(value) !== -1}
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
