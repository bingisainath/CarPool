import {StyleSheet} from 'react-native';
import { screenHeight, screenWidth, theme } from "../../styles/theme";

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: theme.backgroundColor,
    justifyContent: 'center',
  },
  image1: {
    flex: 1,
    resizeMode: 'cover',
    width: screenWidth,
    height: screenHeight,
  },
  profileHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    borderColor: '#000000',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  profilePictureText: {
    color: '#000',
  },
  profileText: {
    color: '#000',
    fontSize: 16,
  },
  subContainer: {
    paddingHorizontal: 20,
  },
  subContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileBody: {
    // backgroundColor: theme.backgroundColor,
    fontSize: 12,
    color: '#808e9b',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileSubBody: {
    marginLeft: 10,
  },
  iconStyle: {
    paddingTop: 8,
  },
  textColorStyle:{
    color:'#000'
  }
});
