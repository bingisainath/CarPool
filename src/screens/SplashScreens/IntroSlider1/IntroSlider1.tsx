import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomButton from '../../../components/customButton/customButton';
import {screenHeight, screenWidth} from '../../../styles/theme';
import {baseLocalEng} from '../../../utils/baseLocalization';
import {style} from './style';

const IntroSlider1 = (props: any) => {
  const {navigation} = props;

  return (
    <View style={[style.container, {width: screenWidth, height: screenHeight}]}>
      <ImageBackground
        source={require('../../../assets/images/Background1.png')}
        style={[style.image, {width: screenWidth, height: screenHeight}]}>
        <View style={style.container1}>
          <View style={style.part1}>
            <Text style={[style?.textStyle, {fontSize: screenWidth * 0.07}]}>
              {baseLocalEng.intro1}
            </Text>
            <Text style={[style?.textSubStyle, {fontSize: screenWidth * 0.05}]}>
              {baseLocalEng.intro2}
            </Text>
          </View>
          <View style={[style.part2, {marginBottom: screenHeight * 0.03}]}>
            <Image
              source={require('../../../assets/images/Share_ride.png')}
              style={[style.image2, {height: screenHeight * 0.3}]}
              resizeMode="contain"
            />
          </View>
          <View style={[style.skipContainer, {marginTop: screenHeight * 0.04}]}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignIn');
              }}>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  marginTop: 6,
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: screenWidth * 0.04,
                }}>
                Skip
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              style.buttonContainer,
              {marginBottom: screenHeight * 0.02},
            ]}>
            <CustomButton
              width={screenWidth * 0.4}
              text="Back"
              disabled={false}
              backgroundColor="#000"
              onPress={() => {
                navigation.navigate('IntroSlider0');
              }}
            />

            <CustomButton
              width={screenWidth * 0.4}
              text="Next"
              disabled={false}
              backgroundColor="#000"
              onPress={() => {
                navigation.navigate('IntroSlider2');
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default IntroSlider1;
