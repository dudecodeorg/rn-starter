import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { setAge } from '../../store/user/user.slice';
import { fetchUser } from '../../store/user/user.thunks';
import { RootState, useAppDispatch } from '../../store';
import { selectUserAge } from '../../store/user/user.selectors';
import styled from '../../styles';

function HomeScreen() {
  const dispatch = useAppDispatch();

  const age = useSelector(selectUserAge);
  const loading = useSelector((s: RootState) => s.user.loading);
  const name = useSelector((s: RootState) => s.user.name);
  const lastName = useSelector((s: RootState) => s.user.lastName);

  const handlePres = () => {
    dispatch(fetchUser());
    dispatch(setAge(55));
  };

  return (
    <Body>
        <View style={styles.container}>
            <Text>Open up App.tsx1s test to start working on your app {age}!</Text>
            <StatusBar style="auto" />
            <Text>Name: {name}</Text>
            <Text>Last name: {lastName}</Text>
            <Box />
            {!loading && <Button title="Send" onPress={handlePres} />}
        </View>
    </Body>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Box = styled.View`
  background-color: ${({ theme }) => theme.color.blue};
  width: 130px;
  height: 130px;
`;


const Body = styled.View`
  flex: 1;
`
