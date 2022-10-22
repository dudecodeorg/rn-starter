export enum Screen {
  Root = 'Root',
  Guest = 'Guest',
  Profile = 'Profile',

  RootTabs = 'RootTabs',

  Welcome = 'Welcome',
  Register = 'Register',
  Login = 'Login',
}

export type RootStackParamsList = {
  [Screen.Root]: undefined;
  [Screen.Guest]: undefined;
};

export type AppStackParamsList = {
  [Screen.Profile]: undefined;
  [Screen.RootTabs]: undefined;
};

export type GuestStackParamsList = {
  [Screen.Welcome]: undefined;
  [Screen.Login]: undefined;
  [Screen.Register]: undefined;
};

/**
 * Define existed Tabs
 */
export enum Tab {
  Calendar = 'Calendar',
  Services = 'Services',
  Clients = 'Clients',
  Settings = 'Settings',
}

export type TabsStackParamList = {
  [Tab.Calendar]: undefined;
  [Tab.Services]: undefined;
  [Tab.Clients]: undefined;
  [Tab.Settings]: undefined;
};
