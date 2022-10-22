import { GilroyMedium, GilroySemiBold, GilroySemiRegular } from '../../assets/fonts';
import { IconFont } from '../../assets/iconmoon';
import { DefaultThemeType } from '../DefaultThemeType';

export const defaultTheme = {
  borderRadius: 3,
  color: {
    primary: 'red',
    blue: 'blue',
  },
} as DefaultThemeType;

export const themeFonts = {
  Regular: 'Gilroy-Regular',
  SemiBold: 'Gilroy-SemiRegular',
  Medium: 'Gilroy-Medium',
};

export const fontsToLoad = {
  [themeFonts.Regular]: GilroySemiRegular,
  [themeFonts.SemiBold]: GilroySemiBold,
  [themeFonts.Medium]: GilroyMedium,
};

export const iconsToLoad = {
  IcoMoon: IconFont,
};
