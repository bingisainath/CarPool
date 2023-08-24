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
  title: {
    padding: 12,
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  otpView: {
    padding: 12,
    width: '100%',
    flexDirection: 'row',
  },
  inputView: {
    color: '#000',
    width: 40,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    marginRight: 8,
  },
  resendView: {
    padding: 12,
    flexDirection: 'row',
  },
  resendOtpText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'blue',
    textDecorationLine: 'underline',
  },
  resendOtpTextTimer: {
    fontSize: 16,
    fontWeight: '500',
    color:'#000'
  },
  errorView: {
    padding: 12,
  },
  errorText: {
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
