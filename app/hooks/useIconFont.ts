import { loadAsync } from 'expo-font';

async function UseCustomIcons() {
  await loadAsync({
    IcoMoon: require('../assets/fonts/iconmoon/icomoon.ttf'),
  });
}

export default UseCustomIcons;
