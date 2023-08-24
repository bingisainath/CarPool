import {StyleSheet} from 'react-native';
import {theme} from './../../../styles/theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '50%',
  },

  container1: {
    flex: 1,
    backgroundColor: '#90F5E4',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    color: theme?.black,
    marginTop: 10,
    fontWeight: '500',
    fontSize: 24,
  },
  textSubStyle: {
    textAlign: 'center',
    color: theme?.black,
    margin: 20,
    fontWeight: '300',
    fontSize: 20,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
  },
});
