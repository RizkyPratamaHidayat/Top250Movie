
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

const DetailInfo = (props) => {
    const {data} = props;
    console.log(data);
    const image = require('../../assets/png/clock.png');
  return (
   <View style={styles.bannerContainer}>
       <View>
           <Text style={[globalStyles.whiteText, styles.title]}>{data?.fullTitle}</Text>
           <View style={styles.clockContainer}>
               <Image source={image} style={styles.clockIco} />
               <Text style={[globalStyles.whiteText, styles.minutes]}>{data?.runtimeMins} Minutes</Text>
           </View>
       </View>
   </View>
  );
};

export default DetailInfo;
