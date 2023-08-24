import {StyleSheet} from 'react-native';
import {theme} from './../../styles/theme';

export const style = StyleSheet.create({
  container: {
    padding: 15,
    marginTop:10,
    borderRadius: 15,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 20,
    backgroundColor: theme?.backgroundColor,
    elevation: 15,
    shadowColor: '#000',
  },
  subcontainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  subcontainer_1: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center', // Center the content horizontally
  },
  caricon: {
    marginHorizontal: 10,
  },
  icon1Style: {
    marginTop: 5,
  },
  pickup: {
    marginLeft: 10,
  },
  navigationStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textColorStyle: {
    color: '#000',
  },
});
