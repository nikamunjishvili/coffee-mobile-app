import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface PaymentProps {
    title: string;
}
const PaymentLayout = ({title}: PaymentProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  )
}

export default PaymentLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})