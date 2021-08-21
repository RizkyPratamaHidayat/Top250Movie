import {StyleSheet} from 'react-native';
import {wp, nz} from '../../helpers/responsive';
import stylesVar from '../../shared/stylesVar';

export default StyleSheet.create({
    bannerContainer:{
        padding: wp(20),
        borderBottomWidth: 1,
        borderColor:stylesVar.theme.dark2,
    },
    genreLabelContainer:{
        backgroundColor:stylesVar.theme.dark2,
        padding:wp(5),
        paddingHorizontal: wp(10),
        borderRadius: wp(20),
        marginRight: wp(10), 
        marginVertical: wp(5)

    },
    clockContainer: {
        flexDirection: 'row',
        marginTop: wp(10)
    },
    dateTitle:{
        fontSize: nz(18),
        fontWeight: 'bold'
    },
   title:{
    fontSize: nz(24),
    fontWeight: 'bold'
   },
   infoContainer:{
       marginRight: wp(40),
       marginTop: wp(20)
   },
   minutes:{
    color: stylesVar.theme.desc,
    marginTop: wp(4)
   },
   releaseContainer:{
       flexDirection:'row'
   },
   genreContainer:{
       flexDirection:'row',
       flexWrap:'wrap',
       width:wp(200),
   }
});
