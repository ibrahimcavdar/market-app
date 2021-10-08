import { Image } from "@mui/icons-material";
import { Box, Button, Paper, Stack, styled } from "@mui/material";
import React from "react";
import { Product } from "../productList/ProductListPanel";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <Stack spacing={2}>
      <Box border="1px solid #F3F0FE" p="16px" borderRadius="12px">
        <img src="https://via.placeholder.com/92?text=Product" />
      </Box>
      <div>{product.price}</div>
      <div>{product.name}</div>
      <Button variant="contained">Add</Button>
    </Stack>
  );
};


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
