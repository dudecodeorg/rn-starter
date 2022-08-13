import { StyleProp } from 'react-native';

export type Style<T> = StyleProp<T>;

type StyledFn = () => Record<string, any>;

export const buildStyles = (styleFn: StyledFn) => styleFn();

export { defaultTheme as theme } from './themes/default';

export { default, ThemeProvider, css } from './styled-components';
