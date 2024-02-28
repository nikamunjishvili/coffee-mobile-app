/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './src/screens';
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import TabNavigator from './src/navigations/TabNavigator';

const stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen
          name="details"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}></stack.Screen>
      </stack.Navigator>
      <stack.Screen
          name="payment"
          component={PaymentScreen}
          options={{animation: 'slide_from_bottom'}}></stack.Screen>
    </NavigationContainer>
  );
}

export default App;
