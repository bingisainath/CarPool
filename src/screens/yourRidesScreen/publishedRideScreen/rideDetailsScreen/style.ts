import {StyleSheet} from 'react-native';
import {theme} from '../../../../styles/theme';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme?.backgroundColor,
  },
  innerContainer: {
    marginTop: 20,
  },
  viewStyle: {
    // flexDirection: 'row',
    // margin: 10,
    // marginBottom: 20,
    margin: 5,
    flexDirection: 'row',
    marginLeft: 30,
    width: '100%',
  },
  locationViewStyle: {
    margin: 5,
    flexDirection: 'row',
    marginLeft: 30,
    width: '90%',
  },
  threeDotViewStyle: {
    margin: 5,
    flexDirection: 'row',
    marginLeft: 30,
    width: '90%',
  },
  mainTextStyle: {
    fontWeight: '500',
    color: '#000',
    fontSize: 20,
    // width: '40%',
    // borderWidth: 2,
  },
  mainTextStyle1: {
    fontWeight: '300',
    fontSize: 16,
    color: '#000',
    paddingBottom: 8,
    alignSelf: 'center',
    //
    // borderWidth:2
  },
  textStyle: {
    fontWeight: '500',
    color: '#000',
    fontSize: 20,
    width: '25%',
    // borderWidth: 2,
    marginLeft:10
  },
  textStyle1: {
    fontWeight: '300',
    fontSize: 16,
    color: '#000',
    paddingBottom: 8,
    alignSelf: 'center',
    width: '55%',
    
  },
  seperator: {
    color: '#000',
    height: 1,
    borderWidth: 0.5,
    marginLeft: 25,
    marginRight: 25,
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
    marginTop: 20,
    marginBottom: 20,
    marginLeft:40,
  },
  subcontainer_1: {
    marginLeft: 20,
  },
  subcontainer_2: {
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  subcontainer_3: {
    marginLeft: 10,
    marginTop: 20,
  },
  image: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 90,
    width: 90,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: theme.backgroundColor,
    marginLeft: 20,
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
  },
});
