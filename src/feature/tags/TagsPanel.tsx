import { Search } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Product } from "../productList/ProductListPanel";
import { toggleTag } from "./tagSlice";

interface TagEntry {
  tag: string;
  count: number;
}

interface Props {
  productList: Product[];
}

export const TagsPanel = ({ productList }: Props) => {
  const selectedTags = useAppSelector(state => state.tag);

  const dispatch = useAppDispatch();

  const tags: Record<string, number> = {};
  productList.map((product: Product) => {
    product.tags.forEach((tag) => {
      tags[tag] = tags[tag] ? tags[tag] + 1 : 1;
    });
  });

  const tagList: TagEntry[] = [
    {
      tag: "All",
      count: productList.length,
    },
  ];

  for (const [key, value] of Object.entries(tags)) {
    tagList.push({ tag: key, count: value });
  }

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Tags</FormLabel>
        <Input
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          endAdornment={
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <Search />
            </IconButton>
          }
        />

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
          {tagList.map((tagEntry) => {
            const labelId = `checkbox-list-label-${tagEntry.tag}`;

            return (
              <ListItem key={tagEntry.tag} disablePadding>
                <ListItemButton
                  role={undefined}
                  onClick={() => {
                    dispatch(toggleTag(tagEntry.tag))
                  }}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={selectedTags.includes(tagEntry.tag)}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={`${tagEntry.tag}  (${tagEntry.count})`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </FormControl>
    </div>
  );
};
