import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  setSortOrder,
  setSortProperty,
  SortOrder,
  SortProperty,
} from "./sortingSlice";

export const SortingPanel = () => {
  const { sortBy, order } = useAppSelector((state) => state.sorting);

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = (event.target as HTMLInputElement).value;
    const [sortProperty, sortOrder] = inputValue.split("_");

    dispatch(setSortProperty(sortProperty as SortProperty));
    dispatch(setSortOrder(sortOrder as SortOrder));
  };
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Sorting</FormLabel>
        <RadioGroup
          aria-label="sorting"
          name="radio-buttons-group"
          value={`${sortBy}_${order}`}
          onChange={handleChange}
        >
          <FormControlLabel
            value="price_asc"
            control={<Radio />}
            label="Price low to high"
          />
          <FormControlLabel
            value="price_desc"
            control={<Radio />}
            label="Price high to low"
          />
          <FormControlLabel
            value="added_asc"
            control={<Radio />}
            label="New to old"
          />
          <FormControlLabel
            value="added_desc"
            control={<Radio />}
            label="Old to new"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
