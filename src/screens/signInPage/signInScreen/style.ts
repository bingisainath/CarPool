import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth, theme} from '../../../styles/theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme?.backgroundColor,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: screenWidth,
    height: screenHeight,
    padding: 12,
  },
  dropdown: {
    width: '20%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  disabledText: {
    fontSize: 16,
    color: theme?.black,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginBottom:20
  },
  labelText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 20,
    marginTop:50
  },
  normalText: {
    fontSize: 16,
    color: theme?.black,
    marginBottom: 20,
  },
  mandatoryText: {
    fontSize: 16,
    color: 'red',
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
  },
});
