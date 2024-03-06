import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store/hook';
import { setMessage } from '../../store/slices';

interface HomeProps {
  title: string;
}

const HomeLayout = ({title}: HomeProps) => {
  const dispatch = useAppDispatch();
  const { message } = useAppSelector(state => state.message);

  const handlePress = () => {
    dispatch(setMessage('Message from Component'));
  };

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{message}</Text>
      <Button title={'Set Message'} onPress={handlePress} />
    </View>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
