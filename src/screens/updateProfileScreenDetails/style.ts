import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
  },
  textStyle: {
    fontSize: 28,
    color: '#000',
    padding: 12,
  },
  textMsgStyle: {
    color:'#000',
    paddingLeft: 16,
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
