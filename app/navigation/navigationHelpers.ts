import {
  createNavigationContainerRef,
  NavigationState,
  PartialState,
} from '@react-navigation/native';

export const navRef = createNavigationContainerRef();

export function getActiveRouteName(
  state: NavigationState | PartialState<NavigationState>
): typeof getActiveRouteName | string {
  const route = state.routes[state?.index || 0];

  if (!route.state) return route.name;

  return getActiveRouteName(state);
}
