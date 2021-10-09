import { Add, Remove } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton, List,
  ListItem, ListItemText, Stack, styled
} from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Product } from "../productList/ProductListPanel";
import { addItemToBasket, removeItemFromBasket } from "./basketSlice";

export const BasketPanel = () => {
  const basketItems = useAppSelector(state => state.basket);

  const dispatch = useAppDispatch();

  const handleRemove = (product: Product) => {
    dispatch(removeItemFromBasket(product));
  }

  const handleAdd = (product: Product) => {
    dispatch(addItemToBasket(product));
  }

  return (
    <div>

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
        {Object.keys(basketItems).map((key, index) => {
          console.log(key, basketItems[key]);
          const basketEntry = basketItems[key];
          const { product, count } = basketEntry;
          const labelId = `checkbox-list-label-${key}`;

          return (
            <ListItem
              key={key}
              disablePadding
            >

              <Grid container spacing={2}>
                <Grid item xs container direction="column" spacing={2}  >
                  <Grid item xs textOverflow={"ellipsis"}>
                    <div>Product 1</div>
                    <div>14.99</div>
                  </Grid>
                </Grid>
                <Grid item>
                  <Stack direction="row" spacing={1}>
                    <IconButton edge="end">
                      <Remove onClick={() => handleRemove(product)} />
                    </IconButton>
                    <StyledCountBox>{count}</StyledCountBox>
                    <IconButton edge="end">
                      <Add onClick={() => handleAdd(product)} />
                    </IconButton>
                  </Stack>
                </Grid>
              </Grid>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

const StyledCountBox = styled(Box)({
  textAlign: "center",
  alignItems: "center",
  backgroundColor: "#1EA4CE",
  padding: "10px"
})
