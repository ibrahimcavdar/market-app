import { Button, Stack } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggle } from "./filterSlice";

export const FilterPanel = () => {
    const dispatch = useAppDispatch();

    const filter = useAppSelector((state) => state.filter);

    function handleClick(itemType: "mug" | "shirt") {
        // const value = event?.currentTarget.value as 'mug'|'shirt' ;

        dispatch(toggle(itemType));
    }

    return (
        <Stack spacing={2} direction="row">
            {/* <Button variant="text">Text</Button> */}
            <Button
                variant="contained"
                disableElevation
                color={filter === "mug" ? "error" : "primary"}
                onClick={() => handleClick("mug")}
            >
                mug
            </Button>
            <Button
                variant="outlined"
                disableElevation
                color={filter === "shirt" ? "error" : "primary"}
                onClick={() => handleClick("shirt")}
            >
                shirt
            </Button>
        </Stack>
    );
};
