import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface HomeProps {
  title: string;
}

const HomeLayout = ({title}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
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
