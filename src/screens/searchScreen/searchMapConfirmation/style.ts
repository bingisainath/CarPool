import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../../styles/theme';
import {theme} from '../../../styles/theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme?.backgroundColor,
  },
  imageContainer: {
    flex: 1,
    overflow: 'hidden',
    height: screenHeight / 3,
  },
  imageBackground: {
    width: '100%',
    height: screenHeight / 3,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  overlay: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    // left: (screenWidth - screenWidth * 0.6) / 2,
    width:screenWidth * 0.6,
  },
  textStyle: {
    color: '#fff',
    fontSize: 16,
    paddingBottom:5,
    paddingLeft:10
  },
  overlay1: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    bottom: 0,
    // left: 55,
    width: screenWidth * 0.6,
    padding:10,
    borderRadius:10
  },
  seperator: {
    color: '#fff',
    borderWidth: 1,
    margin:5
  },
  addPersonStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
});
