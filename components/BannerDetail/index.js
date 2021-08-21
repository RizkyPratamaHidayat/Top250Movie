
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

// End styling import

// Media Import / Variable Init

// End Media Import / Variable Init

const BannerComponent = (props) => {
    const {data} = props;
    const image = { uri: data?.thumbnailUrl};
  return (
   <View style={styles.bannerContainer}>
        <Image source={image} style={styles.image}/>
        <TouchableOpacity onPress={()=> alert('adsads')} style={styles.playBtnContainer}>
            <Image source={require('../../assets/png/Play.png')} style={styles.playLogo}/>
            <View style={styles.statusContainer}>
                <Text style={[globalStyles.whiteText, styles.statusLabel]}>Continue Watching</Text>
                <Text style={[globalStyles.whiteText, styles.title]}>{data?.fullTitle}</Text>
            </View>
        </TouchableOpacity>
   </View>
  );
};

export default BannerComponent;
