import React from 'react';
import {FlatList, Image, Text, View, TouchableOpacity} from 'react-native';
import CustomDriverDetails from '../../components/customDriverDetails/customDriverDetails';
import {baseLocalEng} from '../../utils/baseLocalization';
import {style} from './style';

const seperator = () => {
  return <View style={style.seperator} />;
};

const TravelerSearchResult = (props: any) => {
  const {navigation} = props;
  return (
    <>
      {props.route.params.data.length == 0 ? (
        <View style={style.noRideContainer}>
          <Image
            source={require('../../assets/images/No_Rides_Avaliable.png')}
            style={style.noRideImage}
          />
          <Text style={style.noRideText}>
            {baseLocalEng.RidesNotAvailableMsg}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchScreen');
            }}>
            <Text style={{textDecorationLine: 'underline'}}>Go Back</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={props.route.params.data}
          renderItem={({item}) => (
            <CustomDriverDetails
              profilePicture={
                'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png'
              }
              name={item.name}
              gender={'Male'}
              rating={3.2}
              date={item.date}
              time={item.time}
              seatAvailable={item.count}
              onPress={() => {
                navigation.navigate('searchBookingConfirmation', {
                  id: item.id,
                  vehicleNumber: item.vehicleNumber,
                  date: item.date,
                  time: item.time,
                  count: props.route.params.seatCount,
                  price: item.price,
                  location: {
                    pickUp: item.location.pickUp,
                    drop: item.location.drop,
                  },
                  totalSeat: item.count,
                  riderName: item.name,
                  phoneNumber: item.phoneNumber,
                });
              }}
            />
          )}
          ItemSeparatorComponent={seperator}
        />
      )}
    </>
  );
};

export default TravelerSearchResult;
