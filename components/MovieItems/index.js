
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
const MoviesItem = (props) => {
    const {item} = props;
    const image = { uri: item.image};
    if(item.rank < 11){
      return null;
  }
  return (
    <TouchableOpacity onPress={()=> navigate('detail',{id: item.id})} style={styles.imageContainer}>
         <Image source={image} style={styles.playLogo}/>
        <View style={styles.playBtnContainer}>
            <View style={styles.statusContainer}>
                <Text style={[globalStyles.whiteText, styles.title]}>{item.title}</Text>
            </View>
        </View>
   </TouchableOpacity>
  );
};

  export default MoviesItem;
  