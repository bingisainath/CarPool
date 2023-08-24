import {StyleSheet} from 'react-native';
import {screenWidth, screenHeight} from '../../../styles/theme';
import {theme} from './../../../styles/theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
  },
  subContainer: {
    margin: 5,
    flexDirection: 'row',
    marginLeft: 30,
    width: '100%',
  },
  textStyle: {
    fontSize: 20,
    color: '#000',
    // textDecorationLine: 'underline',
    // borderWidth:2
  },
  countStyle: {
    color: '#000',
    fontSize: 20,
  },
  seperator: {
    color: '#000',
    borderWidth: 1,
    margin: 5,
  },
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#c4c4c4',
    height: 50,
    borderRadius: 10,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 10,
    padding: 3,
  },
  labelStyle: {
    color: theme.black,
    marginBottom: 20,
    marginTop: 10,
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    width: '40%',
  },
  addPersonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    marginRight: 12,
  },
  priceStyle: {
    paddingTop: 1,
    fontSize: 17,
    color:'#000'
    // borderWidth:2,
  },
  minusStyle: {
    marginRight: 10,
  },
  plusStyle: {
    marginLeft: 10,
  },
  btn: {
    marginTop: 80,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    right: 40,
  },
  textInputContainer: {},
  input: {
    color:'#000',
    fontSize: 17,
    borderRadius: 2,
    marginBottom: 10,
    paddingTop: 7,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: screenWidth,
    height: screenHeight,
  },
  errContainer:{
    alignItems:'center',
    justifyContent:'center'
  },
  errText:{
    color:'red'
  }
});
