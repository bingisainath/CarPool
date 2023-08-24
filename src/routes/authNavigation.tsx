import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInOtpScreen from '../screens/signInPage/signInOtpScreen/signInOtpScreen';
import SignInScreen from '../screens/signInPage/signInScreen/signInScreen';
import SignUpScreen from '../screens/signUpPage/signUpScreen/signUpScreen';
import Intro from '../screens/SplashScreens/Intro/Intro';
import IntroSlider0 from '../screens/SplashScreens/IntroSlider0/IntroSlider0';
import IntroSlider1 from '../screens/SplashScreens/IntroSlider1/IntroSlider1';
import IntroSlider2 from '../screens/SplashScreens/IntroSlider2/IntroSlider2';
import SplashImage from '../screens/SplashScreens/SplashImage/SplashImage';
import { theme } from '../styles/theme';

const Stack = createNativeStackNavigator();

const AuthNavigation = (props: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      //   initialRouteName={newLogin == false ? 'SplashImage' : 'Welcome'}
    >
      <Stack.Screen
        name={'SplashImage'}
        component={SplashImage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'IntroSlider0'}
        component={IntroSlider0}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'IntroSlider1'}
        component={IntroSlider1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'IntroSlider2'}
        component={IntroSlider2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Intro'}
        component={Intro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SignUp'}
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SignIn'}
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'OTP'}
        component={SignInOtpScreen}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: theme.backgroundColor},
          headerTitle: 'Enter OTP',
          headerTitleStyle: {color: theme.black},
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
