import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Platform,
} from 'react-native';
import MapView, {Marker, AnimatedRegion} from 'react-native-maps';
const {width, height} = Dimensions.get('window');
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';
import {
  pickUpLocationRequest,
  dropOffLocationRequest,
  userPickUpLocationRequest,
  userDropOffLocationRequest,
} from '../../redux/actions';
import {useDispatch} from 'react-redux';

import {GOOGLE_MAP_KEY} from '../../constants/googleMapKey';
import imagePath from '../../constants/imagePath';
import MapViewDirections from 'react-native-maps-directions';
import Loader from '../loader/Loader';
import {
  locationPermission,
  getCurrentLocation,
} from '../helperFunction/helperFunction';
import CustomButton from '../../components/customButton/customButton';
import {showError} from '../helperFunction/helperFunction';
import {curLoclat, curLocLng} from '../../constants/curLocValues';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const ChooseLocation = (props: any) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const guidelineBaseWidth = 350;
  const guidelineBaseHeight = 680;
  const scale = (size: number) => (width / guidelineBaseWidth) * size;
  const moderateScale = (size: number, factor = 0.5) =>
    size + (scale(size) - size) * factor;

  const mapRef = useRef();
  const markerRef = useRef();
  const inputRef = useRef();

  const [markerPosition, setMarkerPosition] = useState({
    latitude: curLoclat,
    longitude: curLocLng,
    title: 'Your Location',
  });
  const handleMarkerDragEnd = async (event: any) => {
    const {latitude, longitude} = await event.nativeEvent.coordinate;
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDbEqUZaCBBR3pS6LFFL5LkqaS2okzTkjQ`,
    );
    const json = await response.json();
    console.log(json.results[0]?.formatted_address);
    //@ts-ignore
    setMarkerPosition({
      latitude: latitude,
      longitude: longitude,
      title: json.results[0]?.formatted_address,
    });
  };

  const [state, setState] = useState({
    curLoc: {
      latitude: curLoclat,
      longitude: curLocLng,
    },
    isLoading: false,
    coordinate: new AnimatedRegion({
      latitude: curLoclat,
      longitude: curLocLng,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
  });

  const {curLoc, isLoading, coordinate} = state;

  const onCenter = (lat: any, lng: any) => {
    // @ts-ignore
    mapRef?.current?.animateToRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  };

  const checkValid = () => {
    if (Object.keys(markerPosition).length === 0) {
      showError('Please enter your destination location');
      return false;
    }
    return true;
  };

  const onDone = async () => {
    const isValid = checkValid();

    //@ts-ignore
    inputRef.current.clear();
    if (props.route.params.req == 'publish') {
      if (isValid) {
        if (props.route.params.loc == 'source') {
          await dispatch(pickUpLocationRequest(markerPosition));
          setMarkerPosition({
            latitude: curLoclat,
            longitude: curLocLng,
            title: 'Your Location',
          }); //@ts-ignore

          navigation.navigate('PublisedRideScreen');
        } else {
          dispatch(dropOffLocationRequest(markerPosition));
          setMarkerPosition({
            latitude: curLoclat,
            longitude: curLocLng,
            title: 'Your Location',
          }); //@ts-ignore

          navigation.navigate('PublisedRideScreen');
        }
      }
    } else if (props.route.params.req == 'search') {
      if (isValid) {
        if (props.route.params.loc == 'pickup') {
          await dispatch(userPickUpLocationRequest(markerPosition));
          setMarkerPosition({
            latitude: curLoclat,
            longitude: curLocLng,
            title: '',
          }); //@ts-ignore
          navigation.navigate('SearchScreen');
        } else {
          dispatch(userDropOffLocationRequest(markerPosition));
          setMarkerPosition({
            latitude: curLoclat,
            longitude: curLocLng,
            title: '',
          }); //@ts-ignore
          navigation.navigate('SearchScreen');
        }
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          zIndex: 999,
          position: 'absolute',
          marginTop: 10,
        }}>
        <View
          style={{
            width: '96%',
            marginLeft: 10,
            padding: 5,
            borderRadius: 15,
            elevation: 20,
            shadowColor: '#000',
          }}>
          <GooglePlacesAutocomplete
            //@ts-ignore
            ref={inputRef}
            placeholder="Search"
            fetchDetails={true}
            onPress={(data: any, details = null) => {
              setMarkerPosition({
                //@ts-ignore
                latitude: details?.geometry?.location?.lat, //@ts-ignore
                longitude: details?.geometry?.location?.lng, //@ts-ignore
                title: details?.address_components[0]?.long_name,
              });
              onCenter(
                details?.geometry?.location?.lat,
                details?.geometry?.location?.lng,
              );
            }}
            query={{
              key: GOOGLE_MAP_KEY,
              language: 'en',
            }}
            styles={{
              textInput: {
                height: 38,
                color: '#000',
                fontSize: 16,
              },
              description: {
                color: '#000',
              },
              predefinedPlacesDescription: {
                color: '#000',
              },
            }}
          />
        </View>
        <View
          style={{
            zIndex: 999,
            position: 'absolute',
            padding: moderateScale(5),
            marginLeft: moderateScale(300),
            marginTop: moderateScale(6),
            borderRadius: 10,
            width: '10%',
          }}>
          <TouchableOpacity>
            <Image style={{height: 25, width: 25}} source={imagePath.search} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}}>
        <MapView
          //@ts-ignore
          ref={mapRef}
          style={StyleSheet.absoluteFill}
          initialRegion={{
            ...curLoc,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
          <Marker
            draggable
            coordinate={markerPosition}
            onDragEnd={handleMarkerDragEnd}
          />
          <Marker coordinate={{latitude: curLoclat, longitude: curLocLng}}>
            <Image
              source={imagePath.icCurLoc}
              style={{width: 13, height: 12}}
              resizeMode="contain"
            />
          </Marker>
        </MapView>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
          onPress={() => onCenter(curLoclat, curLocLng)}>
          <Image source={imagePath.greenIndicator} />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            bottom: 15,
            left: 140,
            width: '30%',
          }}>
          <CustomButton
            onPress={onDone}
            text={props.route.params.btnName}
            disabled={false}
            backgroundColor="#000"
          />
        </View>
      </View>
      <Loader isLoading={isLoading} />
    </View>
  );
};

export default ChooseLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomCard: {
    backgroundColor: 'white',
    width: '100%',
    padding: 30,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
  },
  inpuStyle: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    marginTop: 16,
  },
  searchColor: {
    color: '#000',
  },
});
