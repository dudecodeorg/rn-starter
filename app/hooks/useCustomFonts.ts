import { loadAsync } from 'expo-font';
import { themeFonts } from '../styles/themes/default';

async function useCustomFonts() {
  await loadAsync({
    [themeFonts.Regular]: require('../assets/fonts/Gilroy-Regular.ttf'),
    [themeFonts.SemiBold]: require('../assets/fonts/Gilroy-SemiBold.ttf'),
    [themeFonts.Medium]: require('../assets/fonts/Gilroy-Medium.ttf'),
  });
}

export default useCustomFonts;
