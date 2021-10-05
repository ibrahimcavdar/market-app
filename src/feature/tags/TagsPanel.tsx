import { Search } from "@mui/icons-material";
import {
  Checkbox, FormControl,
  FormLabel, IconButton, Input, List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Product } from "../productList/ProductListPanel";

export const TagsPanel = () => {
  const [tagList, setTagList] = useState<Array<{tag:string,count:number}>>([]);

  useEffect(() => {
    // todo combine this with the one in ProductListPanel
    fetch(`http://localhost:8080/items`)
    .then((res) => res.json())
    .then(data =>{
      const tags: Record<string,number> = {};
      data.map((product: Product) => {
        product.tags.forEach(tag => {
          tags[tag] = tags[tag] ? tags[tag]+1 : 1;
        })

      })

      const tagsArray = [{
        tag: "All",
        count: data.length
      }];

    
      for (const [key, value] of Object.entries(tags)) {
        tagsArray.push({tag:key,count:value});

      }

      setTagList(tagsArray);
    });
  }, []);
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
                  //   onClick={handleToggle(value)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      //   checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`${tagEntry.tag}  (${tagEntry.count})`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </FormControl>
    </div>
  );
};
