import React from "react";
import { buyIceCream } from "../redux";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

function IceCreamContainer() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice cream: {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  );
}

export default IceCreamContainer;
// define mapStateToProps function to access states in redux
// const mapStateToProps = (state) => {
//   return {
//     numOfIceCream: state.iceCream.numOfIceCream,
//   };
// };
// define mapDispatchToProps function to map actions to props in components
// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyIceCream: () => dispatch(buyIceCream()),
//   };
// };
// // connect function from react-redux: connect react apps to redux store
// export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
