import {StyleSheet} from 'react-native';
import { screenHeight, screenWidth, theme } from '../../../styles/theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme?.white,
  },
  noRideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noRideImage: {
    width: screenWidth * 1,
    height: screenHeight * 0.4,
    resizeMode: 'contain',
  },
  noRideText: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    color: theme?.black,
    marginBottom:20
  },
  seperator: {
    color: '#000',
    height: 1,
    borderWidth: 0.5,
    marginLeft: 5,
    marginRight: 5,
  },
});
