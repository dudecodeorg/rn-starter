import {Provider} from "react-redux";
import {store} from "./store/store";
import HomeScreen from "./screens/Home";

export default function App() {

  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
