import * as styledComponents from 'styled-components/native';
import { DefaultThemeType } from './DefaultThemeType';

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as unknown as styledComponents.ReactNativeThemedStyledComponentsModule<DefaultThemeType>;

export { css, ThemeProvider };

export default styled;
