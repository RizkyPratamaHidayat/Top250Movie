
/**
 * BLANK PAGE EXAMPLE
 *
 *
 *
 */

//  React & React Native Depedencies
import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList,Text,Image,TouchableOpacity} from 'react-native';
import globalStyles from '../../shared/globalStyles';
import styles from './styles';
import {navigate} from '../../helpers/navigationRef';

const TrendingItem = (props) => {
    const {item} = props;
    const image = { uri: item.image};
    if(item.rank > 10){
        return null;
    }
  return (
    <TouchableOpacity onPress={()=> navigate('detail',{id: item.id, movieData:item})} style={styles.imageContainer}>
         <Image source={image} style={styles?.playLogo}/>
        <View style={styles.playBtnContainer}>
            <View style={styles.statusContainer}>
                <Text style={[globalStyles.whiteText, styles.title]}>{item.title}</Text>
            </View>
        </View>
        <View style={styles.imdbContainer}>
            <View>
                <Text style={[globalStyles.whiteText, styles.imdblabel]}>IMDb</Text>
                <Image style={styles.imdbLogo} source={require('../../assets/png/bintang.png')} />
            </View>
            <Text style={[globalStyles.whiteText, styles.imdbRating]}>
                {item.imDbRating}
            </Text>
        </View>
   </TouchableOpacity>
  );
};

  export default TrendingItem;
  