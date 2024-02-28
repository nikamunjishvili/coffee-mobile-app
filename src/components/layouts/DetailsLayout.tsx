import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface DetailsProps {
  title: string;
}

const DetailsLayout = ({title}: DetailsProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default DetailsLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
