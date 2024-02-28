import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface FavoriteProps {
  title: string;
}
const FavoriteLayout = ({title}: FavoriteProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default FavoriteLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
