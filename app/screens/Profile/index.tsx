import styled from '../../styles';
import React from 'react';
import { useAppDispatch } from '../../store';
import useAuth from '../../hooks/useAuth';
import { logOutUser } from '../../store/user/user.thunks';

function ProfileScreen() {
  const dispatch = useAppDispatch();
  const { logOut } = useAuth();

  const onLogOutPress = () => {
    dispatch(logOutUser(logOut));
  };

  return (
    <Container>
      <HelloText>Welcome back, Dude!</HelloText>
      <LoginButton onPress={onLogOutPress} title="Logout" />
    </Container>
  );
}

export default ProfileScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const HelloText = styled.Text`
  color: burlywood;
  font-weight: bold;
  font-size: 24px;
`;

const LoginButton = styled.Button``;
