import {StyleSheet} from 'react-native';
import {wp, nz} from '../../helpers/responsive';
import stylesVar from '../../shared/stylesVar';

export default StyleSheet.create({
  root: {
    padding: wp(20),
    paddingTop: wp(40),
  },
  titleLabel: {
    color: stylesVar.theme.orange1,
    fontSize: nz(24),
  },
});
