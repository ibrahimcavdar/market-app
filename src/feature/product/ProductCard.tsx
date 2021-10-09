import { Image } from "@mui/icons-material";
import { Box, Button, Paper, Stack, styled } from "@mui/material";
import React, { MouseEventHandler } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addItemToBasket } from "../basket/basketSlice";
import { Product } from "../productList/ProductListPanel";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event)=>{
    dispatch(addItemToBasket(product))
  }
  return (
    <Stack spacing={2}>
      <Box border="1px solid #F3F0FE" p="16px" borderRadius="12px">
        <img src={`https://dummyimage.com/92/c4c4c4/fff&text=Product`} width="100%" height="100%" />
      </Box>
      <div>{product.price}</div>
      <div>{product.name}</div>
      <Button variant="contained" onClick={handleClick} >Add</Button>
    </Stack>
  );
};


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
