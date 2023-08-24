import {StyleSheet} from 'react-native';
import { theme } from '../../styles/theme';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
    justifyContent: 'center',
  },
  profileHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePictureText: {
    color: '#000',
    fontSize: 25,
    fontWeight: '500',
  },
  FinalText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
  FinalTextcontainer:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:15
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
  },
  
});


