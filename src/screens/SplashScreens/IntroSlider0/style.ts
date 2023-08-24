import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth, theme} from '../../../styles/theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
  },
  part1: {
    marginTop: screenHeight * 0.1,
    paddingRight: screenWidth * 0.1,
  },
  textStyle: {
    color: theme?.black,
    fontWeight: '500',
    marginLeft: screenWidth * 0.05,
  },
  textSubStyle: {
    color: theme?.black,
    margin: screenHeight * 0.02,
    fontWeight: '300',
  },
  part2: {
    width: screenWidth * 0.8,
    alignSelf: 'center',
    marginBottom: screenHeight * 0.03,
  },
  image2: {
    width: '100%',
    height: 200,
  },
  btn: {
    alignSelf: 'center',
    marginBottom: screenHeight * 0.02,
  },
});
