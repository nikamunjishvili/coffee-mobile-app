import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import {CartScreen, FavoriteScreen, HomeScreen} from '../screens';
import PaymentScreen from '../screens/PaymentScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={PaymentScreen}
        options={{
          tabBarLabel: 'Payment',
          // tabBarIcon: ({color, size}) => (
          //   <MaterialCommunityIcons name="bell" color={color} size={size} />
          // ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: 'Favorite',
          // tabBarIcon: ({color, size}) => (
          //   <MaterialCommunityIcons name="account" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          // tabBarIcon: ({color, size}) => (
          //   <MaterialCommunityIcons name="account" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Details',
          // tabBarIcon: ({color, size}) => (
          //   <MaterialCommunityIcons name="account" color={color} size={size} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
