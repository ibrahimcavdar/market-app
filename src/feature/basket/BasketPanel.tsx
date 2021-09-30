import { Add, Remove } from "@mui/icons-material";
import {
    IconButton, List,
    ListItem, ListItemText
} from "@mui/material";
import React from "react";

export const BasketPanel = () => {
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
        {["14,99", "14,99", "9,99"].map((value, index) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              disablePadding
              secondaryAction={
                <div>
                  <IconButton edge="end" aria-label="comments">
                    <Remove />
                  </IconButton>
                  &nbsp;&nbsp;
                  <span>1</span>
                  <IconButton edge="end" aria-label="comments">
                    <Add />
                  </IconButton>
                </div>
              }
            >
              <ListItemText id={labelId} primary={`Product ${index}`} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
