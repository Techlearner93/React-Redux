import React from "react";
import { buyCake } from "../redux";
import { useSelector, useDispatch } from "react-redux";

function CakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes: {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}
export default CakeContainer;
