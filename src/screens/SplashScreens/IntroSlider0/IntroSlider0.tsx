import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import CustomButton from '../../../components/customButton/customButton';
import {screenHeight, screenWidth} from '../../../styles/theme';
import {baseLocalEng} from '../../../utils/baseLocalization';
import {style} from './style';

const IntroSlider0 = (props: any) => {
  const {navigation} = props;
  return (
    <View style={[style.container, {width: screenWidth, height: screenHeight}]}>
      <ImageBackground
        source={require('../../../assets/images/Background0.png')}
        style={[style.image, {width: screenWidth, height: screenHeight}]}>
        <View style={style.container1}>
          <View style={[style.part1, {paddingRight: screenWidth * 0.1}]}>
            <Text style={[style?.textStyle, {fontSize: screenWidth * 0.08}]}>
              {baseLocalEng.it1}
            </Text>
            <Text style={[style?.textSubStyle, {fontSize: screenWidth * 0.05}]}>
              {baseLocalEng.it2}
            </Text>
          </View>
          <View style={[style.part2, {marginBottom: screenHeight * 0.03}]}>
            <Image
              source={require('../../../assets/images/City_driver.png')}
              style={[style.image2, {height: screenHeight * 0.2}]}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={[style.btn, {marginBottom: screenHeight * 0.02}]}>
          <CustomButton
            text="     Next     "
            disabled={false}
            backgroundColor="#000"
            width="60%"
            onPress={() => {
              navigation.navigate('IntroSlider1');
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default IntroSlider0;
