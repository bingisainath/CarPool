import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../styles/theme';
import {theme} from '../../styles/theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: screenWidth,
    height: screenHeight,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  inputContainer: {
    marginTop: 50,
    marginLeft: screenWidth / 15,
  },
  overlay: {
    flexDirection: 'row',
    backgroundColor: '#c4c4c4',
    marginBottom: 10,
    left: (screenWidth - screenWidth * 0.5) / 15,
    width: screenWidth * 0.8,
    padding: 5,
    borderRadius: 10,
  },
  textStyle: {
    color: '#000',
    fontSize: 16,
    paddingTop: 10,
    width: '87%',
  },
  overlay1: {
    backgroundColor: 'white',
    bottom: 0,
    left: (screenWidth - screenWidth * 0.6) / 2,
    width: screenWidth * 0.6,
  },
  seperator: {
    color: '#000',
    borderWidth: 1,
    margin: 5,
  },
  addPersonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 30,
    right: 40,
  },
  textContainer: {
    marginLeft: 20,
    marginRight: 40,
    marginBottom: 50,
    // alignItems:'center',
    // justifyContent:'center'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  mainTextContainer: {
    // marginLeft: 20,
    marginRight: 30,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  downArrow: {
    alignItems: 'center',
    marginLeft: -screenWidth / 15,
  },
  errContainer: {
    marginTop: 5,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  heading: {
    marginRight: 30,
    marginBottom: 10,
    // alignItems:'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
});
