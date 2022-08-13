import { Provider } from 'react-redux';
import { store } from './store/store';
import RootStack from './navigation/RootStack';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
}
