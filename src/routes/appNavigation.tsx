import auth from '@react-native-firebase/auth';
import React from 'react';
import {useDispatch} from 'react-redux';
import {
  bookedRideDataRequest,
  profileDataRequest,
  publishRideDataRequest,
  updateIsReceivedRequest,
} from '../redux/actions';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ChooseLocation from '../components/chooseLocation/chooseLocation';
import BookingConfirmationScreen from '../screens/bookingConfirmationScreen/bookingConfirmationScreen';
import ProfileScreen from '../screens/profileScreen/profileScreen';
import FinalSelection from '../screens/publishRideScreen/mapConfirmationScreen/publishFinalSelection';
import PublishRideMainScreen from '../screens/publishRideScreen/publishRideMainScreen/publishRideScreen';
import PublisedRideScreen from '../screens/publishRideScreen/publishRideScreen';
import RideDetailsScreen from '../screens/rideDetailsScreen/rideDetailsScreen';
import searchBookingConfirmation from '../screens/searchBookingConfirmation/searchBookingConfirmation';
import SearchFinalSelection from '../screens/searchScreen/searchMapConfirmation/searchFinalSelection';
import SearchScreen from '../screens/searchScreen/searchScreen';
import TravelerSearchResult from '../screens/travelerSearchResult/travelerSearchResult';
import {
  UpdateProfileScreenEmergencyNumber,
  UpdateProfileScreenName,
} from '../screens/updateProfileScreenDetails/updateProfileScreenDetails';
import YourRidesNavigationScreen from '../screens/yourRidesScreen/yourRidesNavigationScreen/yourRidesNavigationScreen';
import PublishedRideDetailsScreen from '../screens/yourRidesScreen/publishedRideScreen/rideDetailsScreen/rideDetailsScreen';
import {theme} from '../styles/theme';

const YourRideStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const PublishRideStack = createNativeStackNavigator();

const YourRideStackScreen = () => {
  return (
    <YourRideStack.Navigator>
      <YourRideStack.Screen
        name="YourRides"
        component={YourRidesNavigationScreen}
        options={{headerShown: false}}
      />
      <YourRideStack.Screen
        name="PublisedRideScreen"
        component={PublisedRideScreen}
      />
      <YourRideStack.Screen
        name="RideDetails"
        component={RideDetailsScreen}
        options={{
          headerTitle: 'Booked Ride Details',
          headerTitleStyle: {color: theme.black},
          headerTitleAlign: 'center',
        }}
      />
      <YourRideStack.Screen
        name="PublishedRideDetails"
        component={PublishedRideDetailsScreen}
        options={{
          headerTitle: 'Publised Ride Details',
          headerTitleStyle: {color: theme.black},
          headerTitleAlign: 'center',
        }}
      />
    </YourRideStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <YourRideStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="UpdateName"
        component={UpdateProfileScreenName}
        options={{
          headerStyle: {backgroundColor: theme?.white},
          headerTitle: '',
        }}
      />
      <ProfileStack.Screen
        name="UpdateEmergencyNumber"
        component={UpdateProfileScreenEmergencyNumber}
        options={{
          headerStyle: {backgroundColor: theme?.white},
          headerTitle: '',
        }}
      />
    </ProfileStack.Navigator>
  );
};

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator initialRouteName="SearchScreen">
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}></SearchStack.Screen>
      <SearchStack.Screen
        name="ChooseLocation"
        component={ChooseLocation}
        options={{
          headerTitle: 'Choose Location',
          headerTitleStyle: {color: theme.black},
          headerTitleAlign: 'center',
        }}
      />
      <SearchStack.Screen
        name="TravelerSearchResult"
        component={TravelerSearchResult}
        options={{
          headerStyle: {backgroundColor: theme.backgroundColor},
          headerTitle: 'Rides Available',
          headerTitleStyle: {color: theme.black},
          headerTitleAlign: 'center',
        }}
      />
      <SearchStack.Screen
        name="searchBookingConfirmation"
        component={searchBookingConfirmation}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="SearchFinalSelection"
        component={SearchFinalSelection}
        options={{headerShown: false}}
      />
    </SearchStack.Navigator>
  );
};

const PublishRideStackScreen = () => {
  return (
    <PublishRideStack.Navigator initialRouteName="PublisedRideScreen">
      <YourRideStack.Screen
        name="PublisedRideScreen"
        component={PublisedRideScreen}
        options={{headerShown: false}}
      />
      <PublishRideStack.Screen
        name="FinalSelection"
        component={FinalSelection}
        options={{
          headerTitle: 'Route Details',
          headerTitleStyle: {color: theme.black},
          headerTitleAlign: 'center',
        }}
      />
      <PublishRideStack.Screen
        name="ChooseLocation"
        component={ChooseLocation}
        options={{
          headerTitle: 'Choose Location',
          headerTitleStyle: {color: theme.black},
          headerTitleAlign: 'center',
        }}
      />
      <PublishRideStack.Screen
        name="BookingConfirmationScreen"
        component={BookingConfirmationScreen}
        options={{headerShown: false}}
      />
      <PublishRideStack.Screen
        name="PublishRideMainScreen"
        component={PublishRideMainScreen}
        options={{headerShown: false}}
      />
    </PublishRideStack.Navigator>
  );
};

const AppNavigation = () => {
  const user = auth().currentUser;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(profileDataRequest(user?.uid));
    dispatch(publishRideDataRequest(user?.uid));
    dispatch(bookedRideDataRequest(user?.uid));
  }, []);

  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      activeColor={theme.black}
      inactiveColor="#3e2465"
      barStyle={{
        backgroundColor: theme?.white,
        borderTopColor: theme?.lightGrey,
        borderTopWidth: 1,
        height: 70,
      }}
      initialRouteName="Book Ride">
      <Tab.Screen
        name="Book Ride"
        component={SearchStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'magnify'}
              size={focused ? 27 : 25}
              color={focused ? theme?.blue : theme?.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Publish Ride"
        component={PublishRideStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'car-clock'}
              size={focused ? 27 : 25}
              color={focused ? theme?.blue : theme?.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Your Rides"
        component={YourRideStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'car-side'}
              size={focused ? 27 : 25}
              color={focused ? theme?.blue : theme?.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'account-outline'}
              size={focused ? 27 : 25}
              color={focused ? theme?.blue : theme?.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
