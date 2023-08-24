import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import CustomButton from '../../../components/customButton/customButton';
import {screenHeight, screenWidth} from '../../../styles/theme';
import {baseLocalEng} from '../../../utils/baseLocalization';
import {style} from './style';
const IntroSlider2 = (props: any) => {
  const {navigation} = props;

  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../../../assets/images/Background3.png')}
        style={[style.image, {width: screenWidth, height: screenHeight}]}>
        <View style={style.container1}>
          <View style={style.part1}>
            <Text style={style?.textStyle}>{baseLocalEng.slash}</Text>
            <Text style={style?.textSubStyle}>{baseLocalEng.slash1}</Text>
          </View>
          <View style={style.part2}>
            <Image
              source={require('../../../assets/images/Order_ride.png')}
              style={[style.image2, {height: screenHeight * 0.4}]}
              resizeMode="contain"
            />
          </View>
          <View style={style.buttonContainer}>
            <CustomButton
              width={screenWidth * 0.4}
              text="Back"
              disabled={false}
              backgroundColor="#000"
              onPress={() => {
                navigation.navigate('IntroSlider1');
              }}
            />

            <CustomButton
              width={screenWidth * 0.4}
              text="Next"
              disabled={false}
              backgroundColor="#000"
              onPress={() => {
                navigation.navigate('SignIn');
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default IntroSlider2;
