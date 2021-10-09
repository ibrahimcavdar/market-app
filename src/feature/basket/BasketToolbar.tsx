import { Grid, Icon, SvgIcon } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { calculatePrice } from "./calculatePrice";

const MyBasket = styled("div")({
  position: "absolute",
  right: "7%",
  top: 0,
  height: 50,
//   verticalAlign: "middle",
});

export const BasketToolbar = () => {
  const basketItems = useAppSelector(state => state.basket);
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
        <Grid item>{calculatePrice(Object.values(basketItems))}</Grid>
      </Grid>
    </MyBasket>
  );
};
