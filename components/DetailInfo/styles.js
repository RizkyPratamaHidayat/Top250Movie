import {StyleSheet} from 'react-native';
import {wp, nz} from '../../helpers/responsive';
import stylesVar from '../../shared/stylesVar';

export default StyleSheet.create({
    bannerContainer:{
        padding: wp(20),
        borderBottomWidth: 1,
        borderColor:stylesVar.theme.dark2
    },
    clockContainer: {
        flexDirection: 'row',
        marginTop: wp(10)
    },
   title:{
    fontSize: nz(24),
    fontWeight: 'bold'
   },
   minutes:{
    color: stylesVar.theme.desc,
    marginTop: wp(4)
   }
});
