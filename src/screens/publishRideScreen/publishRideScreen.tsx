import {View, Text, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import CustomButton from '../../components/customButton/customButton';
import CustomRoundButton from '../../components/customRoundButton/customRoundButton';
import {style} from './style';
import {baseLocalEng} from './../../utils/baseLocalization';

//@ts-ignore
const PublishRideScreen = ({navigation}) => {
  const [state, setState] = useState({pickUpCords: {}});
  const [locationValidation, setLocationValidation] = useState('start');

  const pickUplocation = useSelector((state: any) => state.pickUplocation);
  const droplocation = useSelector((state: any) => state.dropOfflocation);

  const onPressLocation = () => {
    if (pickUplocation == undefined || pickUplocation == '') {
      setLocationValidation('WrongPick');
    } else {
      if (droplocation == undefined || droplocation == '') {
        setLocationValidation('WrongDrop');
      } else {
        setLocationValidation('start');
        navigation.navigate('FinalSelection');
      }
    }

    // navigation.navigate('FinalSelection');
  };

  React.useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../../assets/images/Background1.png')}
        style={style.image}>
        <View style={style.inputContainer}>
          <View style={style.mainTextContainer}>
            <Text style={style.mainText}>{baseLocalEng.publishMain}</Text>
          </View>
          <View style={style.textContainer}>
            <Text style={style.text}>{baseLocalEng.IntroText}</Text>
          </View>
          <View style={style.heading}>
            <Text style={style.text}>Source :</Text>
          </View>
          <View style={style.overlay}>
            <Icon name={'map-marker'} size={40} color={'#000000'}></Icon>
            <Text
              style={style.textStyle}
              numberOfLines={1}
              onPress={() => {
                setLocationValidation('start');
                navigation.navigate('ChooseLocation', {
                  // nav: 'Home Screen',
                  btnName: 'Confirm',
                  req: 'publish',
                  loc : 'source'
                });
              }}>
              {pickUplocation?.title == '' || pickUplocation?.title == undefined
                ? 'Source'
                : pickUplocation?.title}
            </Text>
          </View>
          <View style={style.downArrow}>
            <Feather
              name={'chevrons-down'}
              size={40}
              color={'#000000'}></Feather>
          </View>
          <View style={style.heading}>
            <Text style={style.text}>Destination :</Text>
          </View>
          <View style={style.overlay}>
            <Icon name={'map-marker'} size={40} color={'#000000'}></Icon>
            <Text
              style={style.textStyle}
              numberOfLines={1}
              onPress={() => {
                setLocationValidation('start');
                navigation.navigate('ChooseLocation', {
                  // nav: 'FinalSelection',
                  // nav: 'Home Screen',
                  btnName: 'Confirm',
                  req: 'publish',
                  loc : 'destination'
                });
              }}>
              {droplocation?.title == '' || droplocation?.title == undefined
                ? 'Destination'
                : droplocation?.title}
            </Text>
          </View>
        </View>
        {locationValidation === 'start' ? null : locationValidation ===
            'WrongPick' || locationValidation === 'WrongDrop' ? (
          locationValidation === 'WrongPick' ? (
            <View style={style.errContainer}>
              <Text style={style.errText}>Select Proper Pick Location</Text>
            </View>
          ) : (
            <View style={style.errContainer}>
              <Text style={style.errText}>Select Proper Drop Location</Text>
            </View>
          )
        ) : null}
        <View style={style.btn}>
          <CustomRoundButton
            onPress={onPressLocation}
            text="Submit"
            disabled={false}
            backgroundColor="#000"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default PublishRideScreen;
