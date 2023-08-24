import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/routes/RootStack';
import SignUpScreen from './src/screens/signUpPage/signUpScreen/signUpScreen';
import {View} from 'react-native';
// import Test from './src/screens/test';

// import GoogleMapTest from './src/screens/googleMapTest';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
