import React, { useState } from "react";
import { buyIceCream } from "../redux";
import { useSelector, useDispatch } from "react-redux";

function IceCreamContainer() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  const [iceCreamPurchase, setIceCreamPurchase] = useState(1);
  return (
    <div>
      <h2>Number of ice-creams in stock: {numOfIceCreams}</h2>
      <input
        type="text"
        value={iceCreamPurchase}
        onChange={(e) => setIceCreamPurchase(e.target.value)}
      />
      <button onClick={() => dispatch(buyIceCream(iceCreamPurchase))}>
        Buy {iceCreamPurchase} Ice Cream
      </button>
    </div>
  );
}

export default IceCreamContainer;
