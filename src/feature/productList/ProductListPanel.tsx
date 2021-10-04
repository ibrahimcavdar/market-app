import { Grid } from "@mui/material";
import React, { useEffect } from "react";

export const ProductListPanel = () => {
  useEffect(() => {
    fetch("http://localhost:8080/items?itemType=shirt&manufacturer=OHara-Group&_page=1&_limit=16&_sort=price&_order=asc&tags_like=Person")
    .then((res) => res.json())
    .then(data=>console.log(data));
  }, []);
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {Array.from(Array(30)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <div>xs=2</div>
        </Grid>
      ))}
    </Grid>
  );
};
