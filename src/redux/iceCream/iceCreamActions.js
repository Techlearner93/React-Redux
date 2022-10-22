import { BUY_ICECREAM } from "./iceCreamTypes";

export const buyIceCream = (iceCreamPurchase = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: iceCreamPurchase,
  };
};
