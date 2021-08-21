import {StyleSheet} from 'react-native';
import {wp, nz} from '../../helpers/responsive';
import stylesVar from '../../shared/stylesVar';

export default StyleSheet.create({
    trendingLabel:{
        fontWeight: 'bold',
        fontSize: nz(24),
        marginBottom: wp(20)
    },
    scrollContent:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
