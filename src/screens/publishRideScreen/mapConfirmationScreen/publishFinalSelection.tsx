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
import MapViewDirections from 'react-native-maps-directions';
import {useSelector} from 'react-redux'; //@ts-ignore
import Icon from 'react-native-vector-icons/dist/Ionicons';

import {GOOGLE_MAP_KEY} from '../../../constants/googleMapKey';
import imagePath from '../../../constants/imagePath';
import Loader from '../../../components/loader/Loader';
import {
  locationPermission,
  getCurrentLocation,
} from '../../../components/helperFunction/helperFunction';
import CustomButton from '../../../components/customButton/customButton';
import customRoundButton from '../../../components/customRoundButton/customRoundButton';
import {style} from './style';
import CustomRoundButton from '../../../components/customRoundButton/customRoundButton';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const FinalSelection = (props: any) => {
  const {navigation} = props;

  const mapRef = useRef();
  const markerRef = useRef();

  const [state, setState] = useState({
    curLoc: {
      // latitude: 30.7046,
      // longitude: 77.1025,
      latitude: 17.5065,
      longitude: 78.4213,
    },
    destinationCords: {},
    isLoading: false,
    coordinate: new AnimatedRegion({
      // latitude: 30.7046,
      // longitude: 77.1025,
      latitude: 17.5065,
      longitude: 78.4213,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
    time: 0,
    distance: 0,
    heading: 0,
  });

  const updateState = (data: any) => setState(state => ({...state, ...data}));
  const fetchTime = (d: any, t: any) => {
    updateState({
      distance: d,
      time: t,
    });
  };

  const pickUplocation = useSelector((state: any) => state.pickUplocation);
  const droplocation = useSelector((state: any) => state.dropOfflocation);

  const edgePaddingValue = 100;
  const bottomPaddingValue = 100;
  const topPaddingValue = 250;

  const edgePadding = {
    top: topPaddingValue,
    right: edgePaddingValue,
    bottom: bottomPaddingValue,
    left: edgePaddingValue,
  };

  useEffect(() => {
    //@ts-ignore
    mapRef.current.fitToCoordinates([pickUplocation, droplocation], {
      edgePadding,
    });
  });

  const traceRoute = () => {
    //@ts-ignore
    mapRef.current.fitToCoordinates([pickUplocation, droplocation], {
      edgePadding,
    });
  };

  return (
    <View style={{flex: 1}}>
      <View style={{width: '100%', height: '100%'}}>
        <MapView
          //@ts-ignore
          ref={mapRef}
          style={StyleSheet.absoluteFill}>
          <Marker.Animated
            //  @ts-ignore
            ref={markerRef}
            coordinate={pickUplocation}></Marker.Animated>
          <Marker
            coordinate={pickUplocation}
            title={'PickUp'}
            pinColor={'green'}
            accessibilityLabel={'A'}
            accessibilityLabelledBy={'A'}
          />
          <Marker coordinate={droplocation} title={'Drop'} />
          <MapViewDirections
            origin={{
              latitude: pickUplocation?.latitude,
              longitude: pickUplocation?.longitude,
            }}
            destination={{
              latitude: droplocation?.latitude,
              longitude: droplocation?.longitude,
            }}
            apikey={GOOGLE_MAP_KEY}
            strokeWidth={6}
            strokeColor="blue"
            optimizeWaypoints={true}
            onStart={params => {
              console.log(
                `Started routing between "${params?.origin}" and "${params?.destination}"`,
              );
            }}
            onReady={result => {
              console.log(`Distance: ${result?.distance} km`);
              console.log(`Duration: ${result?.duration} min.`);
              fetchTime(result?.distance, result?.duration);
            }}
            onError={errorMessage => {
              console.log('GOT AN ERROR :', errorMessage);
            }}
          />
        </MapView>
      </View>

      <View style={style.shadowBox}>
        <View>{/* Your content here */}</View>
      </View>

      <View style={style.shadowBox}>
        <View style={{flexDirection: 'row', width: '100%', height: '50%'}}>
          <View
            style={{width: '15%', height: '50%', paddingTop: 3, marginTop: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold',color:'#000'}}>From : </Text>
          </View>
          <View
            style={{
              borderColor: 'gray',
              borderWidth: 2,
              padding: 8,
              borderRadius: 10,
              marginBottom: 5,
              flexDirection: 'row',
              width: '85%',
            }}>
            <Icon name="location-outline" size={25} color="#000" />
            <Text
              numberOfLines={1}
              style={{paddingTop: 3, marginRight: 15, paddingLeft: 2, color:'#000'}}>
              {pickUplocation?.title}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%', height: '50%'}}>
          <View
            style={{width: '15%', height: '50%', paddingTop: 3, marginTop: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold',color:'#000'}}>To : </Text>
          </View>
          <View
            style={{
              borderColor: 'gray',
              borderWidth: 2,
              padding: 8,
              borderRadius: 10,
              marginBottom: 5,
              flexDirection: 'row',
              width: '85%',
            }}>
            <Icon name="location-outline" size={25} color="#000" />
            <Text
              numberOfLines={1}
              style={{paddingTop: 3, marginRight: 15, paddingLeft: 2,color:'#000'}}>
              {droplocation?.title}
            </Text>
          </View>
        </View>
      </View>

      {state.distance !== 0 && state.time !== 0 && (
        <View style={style.shadowbox2}>
          <Text style={{fontWeight: 'bold',color:'#000'}}>
            Time to travel: {state?.time.toFixed(0)} Mins
          </Text>
          <Text style={{fontWeight: 'bold',color:'#000'}}>
            Total Distance: {state?.distance.toFixed(0)} Km
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 90,
          right: 25,
        }}
        onPress={traceRoute}>
        <Image source={imagePath.greenIndicator} />
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          bottom: 25,
          right: 25,
        }}>
        <CustomRoundButton
          onPress={() => navigation.navigate('PublishRideMainScreen')}
          text="Done"
          disabled={false}
          backgroundColor="#000"
        />
      </View>
    </View>
  );
};

export default FinalSelection;
