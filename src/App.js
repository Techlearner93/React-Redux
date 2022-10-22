import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import NewIceCreamContainer from "./components/NewIceCreamContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Cake Store</h2>
        <NewCakeContainer />
        <br />
        <br />
        <h2>Ice Cream Store</h2>
        <NewIceCreamContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
