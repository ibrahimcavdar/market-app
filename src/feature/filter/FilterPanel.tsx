import { Button, Stack } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ItemType, setItemType } from "./filterSlice";

export const FilterPanel = () => {
    const dispatch = useAppDispatch();

    const filter = useAppSelector((state) => state.filter);

    function handleClick(itemType: ItemType) {
        // const value = event?.currentTarget.value as 'mug'|'shirt' ;

        dispatch(setItemType(itemType));
    }

    return (
        <Stack spacing={2} direction="row">
            <Button
                variant={filter === "mug" ? "contained" : "outlined"}
                disableElevation
                onClick={() => handleClick("mug")}
            >
                mug
            </Button>
            <Button
                variant={filter === "shirt" ? "contained" : "outlined"}
                disableElevation
                onClick={() => handleClick("shirt")}
            >
                shirt
            </Button>
        </Stack>
    );
};
