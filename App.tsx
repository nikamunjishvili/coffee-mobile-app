// In App.tsx
import TabNavigator from './src/navigations/DashboardTabNavigator';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {Provider} from 'react-redux';
import store from './src/store/store'; // Correct import path
import {NavigationContainer} from '@react-navigation/native';
import AppProviderLayout from './src/components/layouts/AppProviderLayout';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppProviderLayout />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
