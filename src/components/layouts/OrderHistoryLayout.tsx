import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface OrderHistoryProps {
  title: string;
}

const OrderHistoryLayout = ({title}: OrderHistoryProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default OrderHistoryLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
