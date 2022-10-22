import React, { useState } from "react";
import { buyCake } from "../redux";
import { useSelector, useDispatch } from "react-redux";

function NewCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  const [cakePurchase, setCakePurchase] = useState(1);

  return (
    <div>
      <h2>Number of cakes in stock: {numOfCakes}</h2>
      <input
        type="text"
        value={cakePurchase}
        onChange={(e) => setCakePurchase(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(cakePurchase))}>
        Buy {cakePurchase} Cake
      </button>
    </div>
  );
}
export default NewCakeContainer;
