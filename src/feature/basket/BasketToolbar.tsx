import { Grid, Icon, SvgIcon } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const MyBasket = styled("div")({
  position: "absolute",
  right: "7%",
  top: 0,
  height: 50,
//   verticalAlign: "middle",
});

export const BasketToolbar = () => {
  return (
    <MyBasket>
      {/* <Icon >
        <img src={"basket.svg"} alt={"basket"} />
      </Icon> */}
      <Grid container direction="row" alignItems="center" justifyContent="center">
        <Grid item>
          {/* <LinkIcon className={classes.linkIcon} /> */}
          {/* <Icon > */}
          {/* </Icon> */}
            <img src={"basket.svg"} alt={"basket"}  height={25} width={25}/>
        </Grid>
        <Grid item>39,97</Grid>
      </Grid>
    </MyBasket>
  );
};
