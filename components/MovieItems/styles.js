import {StyleSheet} from 'react-native';
import {wp, nz} from '../../helpers/responsive';
import stylesVar from '../../shared/stylesVar';

export default StyleSheet.create({
    imageContainer:{
        marginHorizontal: wp(10),
        width: wp(140),
        height: wp(200),
        borderRadius: wp(20),
        marginBottom: wp(40)
    },
     playBtnContainer: {
        bottom: wp(5),
      },
      playLogo:{
          resizeMode:'stretch',
          width: '100%',
          height: '100%',
          borderRadius: wp(10),
      },
      statusContainer:{
          marginHorizontal: wp(10),
      },
      statusLabel: {
          fontSize: nz(10),
          lineHeight: wp(20)
      },
      title: {
        fontWeight: 'bold',
        fontSize: nz(10),
        textAlign:'center',
        paddingVertical: wp(10)
    }
});
