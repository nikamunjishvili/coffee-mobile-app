import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface CartProps {
  title: string;
}

const CartLayout = ({title}: CartProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default CartLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
