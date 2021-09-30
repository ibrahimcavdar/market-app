import { Button, Stack } from "@mui/material";
import React from "react";

export const FilterPanel = () => {
  return (
    <Stack spacing={2} direction="row">
      {/* <Button variant="text">Text</Button> */}
      <Button variant="contained">mug</Button>
      <Button variant="outlined">shirt</Button>
    </Stack>
  );
};
