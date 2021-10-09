import { Add, Remove } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton, List,
  ListItem, Stack, styled
} from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Product } from "../productList/ProductListPanel";
import { addItemToBasket, removeItemFromBasket } from "./basketSlice";
import { calculatePrice } from "./calculatePrice";

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
    <Box border="8px solid #1EA4CE" padding={1} >

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          height: "auto",
          maxHeight: "70vh",
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
                    <div>{product.name}</div>
                    <div>{product.price}</div>
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
      <Box border="2px solid #1EA4CE" width={100} height={50}>
        {calculatePrice(Object.values(basketItems))}
      </Box>
    </Box>
  );
};

const StyledCountBox = styled(Box)({
  textAlign: "center",
  alignItems: "center",
  backgroundColor: "#1EA4CE",
  padding: "10px"
})
