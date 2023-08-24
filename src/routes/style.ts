import {StyleSheet} from 'react-native';
import {theme} from '../styles/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
  focusedIconstyles: {
    backgroundColor: theme?.darkgreen,
    borderRadius: wp('6%'),
    width: wp('14.5%'),
    height: hp('6%'),
    textAlign: 'center',
    textAlignVertical: 'center',
    elevation: 5,
    fontSize: wp('7%'),
  },
  iconStyles: {
    fontSize: wp('6%'),
  },
});

export default Styles;