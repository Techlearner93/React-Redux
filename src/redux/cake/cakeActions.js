import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (cakePurchase = 1) => {
  return {
    type: BUY_CAKE,
    payload: cakePurchase,
  };
};
