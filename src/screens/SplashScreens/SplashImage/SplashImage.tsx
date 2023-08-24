import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { style } from './style';


const SplashImage = (props:any) => {
  const {navigation}=props;
  useEffect(() => { 
    const timer = setTimeout(() => { navigation.navigate('Intro'); }, 2000)});
  return (
    <View style={style.container}>
      <Image
        source={require('../../../assets/images/car.jpg')}
        style={style.image}
        resizeMode="contain"
      />
    </View>
  );
};



export default SplashImage;
