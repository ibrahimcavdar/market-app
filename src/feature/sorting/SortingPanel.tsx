import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

export const SortingPanel = () => {
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Sorting</FormLabel>
        <RadioGroup
          aria-label="sorting"
          defaultValue="price_ascending"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="price_ascending"
            control={<Radio />}
            label="Price low to high"
          />
          <FormControlLabel
            value="price_descending"
            control={<Radio />}
            label="Price high to low"
          />
          <FormControlLabel
            value="new_to_old"
            control={<Radio />}
            label="New to old"
          />
          <FormControlLabel
            value="old_to_new"
            control={<Radio />}
            label="Old to new"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
