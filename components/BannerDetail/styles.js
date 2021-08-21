import {StyleSheet} from 'react-native';
import {wp, nz} from '../../helpers/responsive';
import stylesVar from '../../shared/stylesVar';

export default StyleSheet.create({
    image: {
        height: wp(287),
        resizeMode:'stretch'
      },
      playLogo:{
          width: wp(28),
          height: wp(28)
      },
      statusContainer:{
          marginHorizontal: wp(10),
          marginTop: wp(-5)
      },
      playBtnContainer: {
        backgroundColor: 'rgba(225, 0, 0, 0.5)',
        position:'absolute',
        top: wp(100),
        left: wp(150),
        flexDirection: 'row',
        padding: wp(10),
        borderRadius: wp(20)
      },
      statusLabel: {
          fontSize: nz(10),
          lineHeight: wp(20)
      },
      title: {
        fontWeight: 'bold'
    }
});
