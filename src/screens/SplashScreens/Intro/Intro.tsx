import React from 'react';
import {Image, Text, View} from 'react-native';
import CustomButton from '../../../components/customButton/customButton';
import {baseLocalEng} from '../../../utils/baseLocalization';
import {style} from './style';

const Intro = (props: any) => {
  const {navigation} = props;

  return (
    <View style={style.container}>
      <Image
        source={require('../../../assets/images/Electric_car.png')}
        style={style.image}
        resizeMode="contain"
      />

      <View style={style.container1}>
        <View style={style.container2}>
          <Text style={style.textStyle}>{baseLocalEng.t1}</Text>
          <Text style={style.textSubStyle}>{baseLocalEng.t2}</Text>
        </View>
        <View>
          <View style={style.button}>
            <CustomButton
              text="Get Started"
              disabled={false}
              backgroundColor="#000"
              onPress={() => {
                navigation.navigate('IntroSlider0');
              }}></CustomButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Intro;
