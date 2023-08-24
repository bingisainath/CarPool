import {StyleSheet} from 'react-native';
import {theme} from '../../../styles/theme';
import {screenHeight, screenWidth} from '../../../styles/theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme?.backgroundColor,
  },
  inputContainer: {
    marginTop: 150,
    marginLeft: screenWidth / 15,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90F5E4',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  overlay: {
    flexDirection: 'row',
    backgroundColor: '#c4c4c4',
    marginBottom: 10,
    left: (screenWidth - screenWidth * 0.5) / 15,
    width: screenWidth * 0.8,
    padding: 5,
    borderRadius: 10,
  },
  textStyle: {
    color: '#000',
    fontSize: 16,
    paddingTop: 10,
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,
  },
  shadowBox: {
    padding: 10,
    width: '90%',
    height: '20%',
    backgroundColor: 'white',
    position: 'absolute',
    left: 20,
    right: 20,
    top: 10,
    borderRadius: 10,
    elevation: 15,
  },
  shadowbox2: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    padding: 5,
    left: screenWidth / 3.9,
    width: '50%',
    height: '10%',
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 15,
    top:120
  },
});
