
/**
 * BLANK PAGE EXAMPLE
 *
 *
 *
 */

//  React & React Native Depedencies
import React, {useState, useEffect, useRef} from 'react';
import {View, ScrollView, RefreshControl, Text,Image,TouchableOpacity} from 'react-native';
// End React Native import
import {pop} from '../../helpers/navigationRef';
// 3rd Party / Library Depedencies

// End 3rd party import

// Styling Depedencies
import globalStyles from '../../shared/globalStyles';
import styles from './styles';
import {navigate} from '../../helpers/navigationRef'
// End styling import

// Media Import / Variable Init

// End Media Import / Variable Init

const BannerDetailComponent = (props) => {
    const {data} = props;

    const image = { uri: data?.image}
  return (
   <View style={styles.bannerContainer}>
        <Image source={image} style={styles.image}/>
        <TouchableOpacity onPress={()=> navigate('MovieTrailer',{url:data?.linkEmbed})} style={styles.playBtnContainer}>
            <Image source={require('../../assets/png/Play.png')} style={styles.playLogo}/>
        </TouchableOpacity>
   </View>
  );
};

export default BannerDetailComponent;
