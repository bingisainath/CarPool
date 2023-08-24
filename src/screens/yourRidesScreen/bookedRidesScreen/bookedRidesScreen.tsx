import React, {useEffect} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import CustomTravellerRides from '../../../components/custom-traveller-rides/CustomTravellerRides';
import CustomButton from '../../../components/customButton/customButton';
import {style} from './style';
import {baseLocalEng} from './../../../utils/baseLocalization';

// const seperator = () => {
//   return <View style={style.seperator} />;
// };

const BookedRidesScreen = (props: any) => {
  const {navigation} = props;
  const bookedRides = useSelector((state: any) => state.bookedRides);

  useEffect(() => {}, [bookedRides]);

  return (
    <View style={style.container}>
      {bookedRides == undefined || bookedRides?.length == 0  ? (
        <View style={style.noRideContainer}>
          <Image
            source={require('../../../assets/images/No_Ride_Found.png')}
            style={style.noRideImage}
          />
          <Text style={style.noRideText}>{baseLocalEng.BookedRideMsg}</Text>
          <CustomButton
            text="Book a Ride Now"
            disabled={false}
            width="50%"
            backgroundColor="#000"
            onPress={()=>{navigation.navigate('Book Ride')}}></CustomButton>
        </View>
      ) : (
        <FlatList
          data={bookedRides}
          renderItem={({item}) => (
            <CustomTravellerRides
              day={item.day}
              date={item.date}
              time={item.time}
              vehicleNumber={item.vehicleNumber}
              price={item.price}
              pickUpLocation={item.location.pickUp.title}
              dropLocation={item.location.drop.title}
              onPress={() => {
                navigation.navigate('RideDetails', {
                  id: item.id,
                  date: item.date,
                  time: item.time,
                  price: item.price,
                  count: item.count,
                  name: item.riderName,
                  phoneNumber:item.phoneNumber,
                  location: {
                    pickUp: item.location.pickUp.title,
                    drop: item.location.drop.title,
                  },
                });
              }}
            />
          )}
          // ItemSeparatorComponent={seperator}
        />
      )}
    </View>
  );
};

export default BookedRidesScreen;
