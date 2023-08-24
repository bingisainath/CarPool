import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth, theme} from '../../../styles/theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: screenWidth,
    height: screenHeight,
    padding: 12,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  textStyle: {
    color: '#000',
    paddingLeft: 16,
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    width: '100%',
    padding: 12,
  },
  dropdown: {
    color:'#000',
    height: 50,
    backgroundColor: 'white',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color:'#000'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color:'#000'
  },
  labelText: {
    color: '#000',
    marginBottom: 4,
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
