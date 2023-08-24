import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../styles/theme';

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
  inputContainer: {
    marginTop: 50,
    marginLeft: screenWidth / 15,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90F5E4',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
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
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 30,
    right: 40,
  },
  downArrow: {
    alignItems: 'center',
    marginLeft: -screenWidth / 15,
  },
  textContainer: {
    marginLeft: 20,
    marginRight: 40,
    marginBottom: 50,
    // alignItems:'center',
    // justifyContent:'center'
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
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  errContainer: {
    marginTop: 10,
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
