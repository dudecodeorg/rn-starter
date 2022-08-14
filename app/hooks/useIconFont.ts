import { loadAsync } from 'expo-font';

async function UseCustomIcons() {
  await loadAsync({
    IcoMoon: require('../assets/iconmoon/icomoon.ttf'),
  });
}

export default UseCustomIcons;
