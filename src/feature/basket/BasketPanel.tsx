import { Add, Remove } from "@mui/icons-material";
import {
    IconButton, List,
    ListItem, ListItemText
} from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Product } from "../productList/ProductListPanel";
import { addItemToBasket, removeItemFromBasket } from "./basketSlice";

export const BasketPanel = () => {
  const basketItems = useAppSelector(state => state.basket);

  const dispatch = useAppDispatch();

  const handleRemove = (product: Product)=>{
    dispatch(removeItemFromBasket(product));
  }

  const handleAdd = (product: Product)=>{
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
          console.log(key,basketItems[key]);
          const basketEntry = basketItems[key];
          const {product,count} = basketEntry;
          const labelId = `checkbox-list-label-${key}`;

          return (
            <ListItem
              key={key}
              disablePadding
              secondaryAction={
                <div>
                  <IconButton edge="end" aria-label="comments">
                    <Remove onClick={()=>handleRemove(product)} />
                  </IconButton>
                  &nbsp;&nbsp;
                  <span>{count}</span>
                  <IconButton edge="end" aria-label="comments">
                    <Add onClick={()=>handleAdd(product)}/>
                  </IconButton>
                </div>
              }
            >
              <ListItemText id={labelId} primary={`${product.name}`} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
