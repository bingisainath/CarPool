import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import CustomTravellerRides from '../../../components/custom-traveller-rides/CustomTravellerRides';
import CustomButton from '../../../components/customButton/customButton';
import {baseLocalEng} from '../../../utils/baseLocalization';
import {style} from './style';

// const seperator = () => {
//   return <View style={style.seperator} />;
// };

const PublisedRideScreen = (props: any) => {
  const {navigation} = props;
  const publishedRides = useSelector((state: any) => state.publishedRides);

  return (
    <View style={style.container}>
      { publishedRides == undefined || publishedRides?.length == 0 ? (
        <View style={style.noRideContainer}>
          <Image
            source={require('../../../assets/images/No_Ride_Found.png')}
            style={style.noRideImage}
          />
          <Text style={style.noRideText}>{baseLocalEng.PublishedRideMsg}</Text>
          <CustomButton
            text="Publish a Ride Now"
            disabled={false}
            width="50%"
            backgroundColor="#000"
            onPress={() => {
              navigation.navigate('Publish Ride');
            }}></CustomButton>
        </View>
      ) : (
        <FlatList
          data={publishedRides}
          renderItem={({item}) => (
            <CustomTravellerRides
              date={item.date}
              time={item.time}
              vehicleNumber={item.vehicleNumber}
              price={item.price}
              pickUpLocation={item.location.pickUp.title}
              dropLocation={item.location.drop.title}
              onPress={() => {
                navigation.navigate('PublishedRideDetails', {
                  id: item.id,
                  date: item.date,
                  time: item.time,
                  price: item.price,
                  count: item.count,
                  name: item.name,
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

export default PublisedRideScreen;
