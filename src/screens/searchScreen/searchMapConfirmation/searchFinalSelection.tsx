import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {AnimatedRegion, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../../components/customButton/customButton';
import {GOOGLE_MAP_KEY} from '../../../constants/googleMapKey';
import imagePath from '../../../constants/imagePath';
import {
  searchDataRequest,
  updateIsReceivedRequest,
} from './../../../redux/actions';
import {style} from './style';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const SearchFinalSelection = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();

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

  const pickUplocation = useSelector((state: any) => state.userPickUpLocation);
  const droplocation = useSelector((state: any) => state.userDropOffLocation);
  const searchRides = useSelector((state: any) => state.searchRides);
  const loading = useSelector((state: any) => state.loading);
  const isReceived = useSelector((state: any) => state.isReceived);

  const edgePaddingValue = 100;
  const bottomPaddingValue = 200;
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

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Select Date');
  const [selectedTime, setSelectedTime] = useState('Select Time');
  const [count, setCount] = useState(0);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date: any) => {
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    setSelectedDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time: any) => {
    const dt = new Date(time);
    const x = dt.toLocaleTimeString();
    const x1 = x.split(' ');
    const x2 = x1[0].split(':');
    setSelectedTime(x2[0] + ':' + x2[1] + ' ' + x1[1]);
    hideTimePicker();
  };

  const minusHead = () => {
    if (count == 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const addHead = () => {
    if (count == 7) {
      setCount(7);
    } else {
      setCount(count + 1);
    }
  };

  const checkDetails = async () => {
    if (
      pickUplocation === '' ||
      droplocation === '' ||
      count == 0 ||
      selectedDate === 'Select Date' ||
      selectedTime === 'Select Time'
    ) {
      Alert.alert('Please Fill all the fields');
    } else {
      const data = {
        date: selectedDate,
        count: count,
        pickUplocation: pickUplocation,
        droplocation: droplocation,
      };
      await dispatch(searchDataRequest(data));
    }
  };

  useEffect(() => {
    if (isReceived == true) {
      setSelectedDate('Select Date');
      setSelectedTime('Select Time');
      setCount(0);
      dispatch(updateIsReceivedRequest());
      navigation.navigate('TravelerSearchResult', {
        data: searchRides,
        seatCount: count,
      });
    }
  }, [isReceived]);

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

      <View
        style={{
          padding: 10,
          width: '90%',
          height: '25%',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          top: 20,
          left: 20,
          right: 20,
          position: 'absolute',
          borderRadius: 10,
        }}>
        <View style={{flexDirection: 'row', width: '100%', height: '35%'}}>
          <View
            style={{
              width: '15%',
              height: '50%',
              paddingTop: 3,
              marginTop: 10,
            }}>
            <Text style={{fontSize: 16, fontWeight: '600', color: 'white'}}>
              From :{' '}
            </Text>
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
            <Icon name="location-outline" size={25} color="#fff" />
            <Text
              numberOfLines={1}
              style={{
                paddingTop: 3,
                marginRight: 15,
                paddingLeft: 2,
                color: 'white',
              }}>
              {pickUplocation?.title}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%', height: '35%'}}>
          <View
            style={{
              width: '15%',
              height: '50%',
              paddingTop: 3,
              marginTop: 10,
            }}>
            <Text style={{fontSize: 16, fontWeight: '500', color: 'white'}}>
              To :{' '}
            </Text>
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
            <Icon name="location-outline" size={25} color="#fff" />
            <Text
              numberOfLines={1}
              style={{
                paddingTop: 3,
                marginRight: 15,
                paddingLeft: 2,
                color: 'white',
              }}>
              {droplocation?.title}
            </Text>
          </View>
        </View>
        {state.distance !== 0 && state.time !== 0 && (
          <View style={{width: '100%', height: '20%', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', color: 'white', padding: 2}}>
              Time to travel: {state?.time.toFixed(0)} Mins
            </Text>
            <Text style={{fontWeight: 'bold', color: 'white', padding: 2}}>
              Total Distance: {state?.distance.toFixed(0)} Km
            </Text>
          </View>
        )}
      </View>

      <View
        style={{
          width: '100%',
          height: '30%',
          bottom: 0,
          position: 'absolute',
          alignItems: 'center',
        }}>
        <View style={style.overlay1}>
          <View style={{flexDirection: 'row'}}>
            <MatIcon
              name={'calendar-month-outline'}
              size={25}
              color={'#fff'}></MatIcon>
            <Text style={style.textStyle} onPress={() => showDatePicker()}>
              {selectedDate}
            </Text>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              minimumDate={new Date()}
              mode="date"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
            />
          </View>
          <View style={style.seperator}></View>
          <View style={{flexDirection: 'row'}}>
            <MatIcon
              name={'clock-time-eight-outline'}
              size={25}
              color={'#fff'}></MatIcon>
            <Text style={style.textStyle} onPress={() => showTimePicker()}>
              {selectedTime}
            </Text>
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleTimeConfirm}
              onCancel={hideTimePicker}
            />
          </View>
          <View style={style.seperator}></View>
          <View style={style.addPersonStyle}>
            <MatIcon
              name={'account-outline'}
              size={25}
              color={'#fff'}></MatIcon>
            <TouchableOpacity
              onPress={() => {
                minusHead();
              }}>
              <MatIcon
                name={'minus-circle-outline'}
                size={20}
                color={'#fff'}></MatIcon>
            </TouchableOpacity>
            <Text style={style.textStyle}>{count}</Text>
            <TouchableOpacity
              onPress={() => {
                addHead();
              }}>
              <MatIcon
                name={'plus-circle-outline'}
                size={20}
                color={'#fff'}></MatIcon>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
          onPress={traceRoute}>
          <Image source={imagePath.greenIndicator} />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            bottom: 17,
            width: '50%',
            alignItems: 'center',
          }}>
          <CustomButton
            onPress={checkDetails}
            text="Done"
            disabled={false}
            backgroundColor="#000"
          />
        </View>
      </View>
    </View>
  );
};

export default SearchFinalSelection;
