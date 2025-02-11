import React from 'react';

import useAuth from '../../hooks/useAuth';
import { t } from '../../i18n';
import { useAppDispatch } from '../../store';
import { loginUser } from '../../store/user/user.thunks';
import styled from '../../styles';

function HomeScreen() {
  const dispatch = useAppDispatch();
  const { login } = useAuth();

  const onLoginPress = () => {
    dispatch(loginUser(login));
  };

  return (
    <Container>
      <HelloText>{t('helloText')}</HelloText>
      <LoginButton onPress={onLoginPress} title="Login" />
    </Container>
  );
}

export default HomeScreen;

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
