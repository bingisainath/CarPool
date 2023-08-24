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
    alignItems: 'center',
    justifyContent: 'center',
  },
  part1: {
    paddingRight: screenWidth * 0.2, 
  },
  textStyle: {
    color: theme?.black,
    fontWeight: '500',
    fontSize: 24,
    marginLeft: screenWidth * 0.05, 
  },
  textSubStyle: {
    color: theme?.black,
    margin: 20,
    fontWeight: '300',
    fontSize: 20,
  },
  part2: {
    width: screenWidth * 0.8, 
    alignSelf: 'center',
    marginBottom: screenHeight * 0.04, 
  },
  image2: {
    width: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: screenHeight * 0.03,
    paddingHorizontal: screenWidth * 0.1, 
  },
});
