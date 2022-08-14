import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum Screen {
  Home = 'Home',
  Profile = 'Profile',
}

export enum Flows {
  Authorized = 'Authorized',
  Guest = 'Guest',
}

export type RootStackParamList = {
  [Screen.Home]: undefined;
  [Screen.Profile]: { userId: string } | undefined;
  [Flows.Authorized]: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, Screen.Profile>;
