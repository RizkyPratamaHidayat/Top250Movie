import {StyleSheet} from 'react-native';
import {wp, nz} from '../../helpers/responsive';
import stylesVar from '../../shared/stylesVar';

export default StyleSheet.create({
    imageContainer:{
        marginHorizontal: wp(10),
        width: wp(180),
        height: wp(240),
        borderRadius: wp(20),
    },
    imdblabel:{
        fontSize:nz(8)
    },
    imdbLogo:{
        width: wp(20),
        height: wp(20)
    },
    imdbRating:{
        marginTop: wp(12),
        marginLeft: wp(5)
    },
    imdbContainer:{
        backgroundColor: 'rgba(225, 0, 0, 0.5)',
        position:'absolute',
        right: wp(10),
        top: wp(10),
        flexDirection:'row',
        borderRadius:wp(10),
        padding:wp(5),
        paddingHorizontal : wp(10)
    },
     playBtnContainer: {
        backgroundColor: 'rgba(225, 0, 0, 0.5)',
        position:'absolute',
        bottom: wp(10),
        left: wp(10),
        flexDirection: 'row',
        padding: wp(10),
        borderRadius: wp(20),
        width: wp(160),
        justifyContent:'center'
      },
      playLogo:{
          resizeMode:'stretch',
          width: '100%',
          height: '100%',
          borderRadius: wp(5),
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
