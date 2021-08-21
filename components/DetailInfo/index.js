/**
 * BLANK PAGE EXAMPLE
 *
 *
 *
 */

//  React & React Native Depedencies
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
// End React Native import
import moment from 'moment';
import {pop} from '../../helpers/navigationRef';
// 3rd Party / Library Depedencies

// End 3rd party import

// Styling Depedencies
import globalStyles from '../../shared/globalStyles';
import styles from './styles';

// End styling import

// Media Import / Variable Init

// End Media Import / Variable Init

const DetailInfo = props => {
  const {data,movieData} = props;
  const image = require('../../assets/png/clock.png');
  const rating = require('../../assets/png/rating.png');
  return (
    <View style={styles.bannerContainer}>
      <View>
        <Text style={[globalStyles.whiteText, styles.title]}>
          {data?.fullTitle}
        </Text>
        <View style={styles.clockContainer}>
         <View style={styles.clockContainer}>
         <Image source={image} style={styles.clockIco} />
          <Text style={[globalStyles.whiteText, styles.minutes]}>
            {data?.runtimeMins} Minutes
          </Text>
         </View>
         <View style={[styles.clockContainer, styles.imdbContainer]}>
         <Image source={rating} style={styles.clockIco} />
          <Text style={[globalStyles.whiteText, styles.minutes]}>
            {movieData?.imDbRating} (IMDb)
          </Text>
         </View>
        </View>
      </View>
      <View style={styles.releaseContainer}>
        <View style={styles.infoContainer}>
          <Text style={[globalStyles.whiteText, styles.dateTitle]}>
            Release date
          </Text>
          <Text style={[globalStyles.whiteText, styles.minutes]}>
            {moment(data?.releaseDate).format('DD MMMM, YYYY')}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[globalStyles.whiteText, styles.dateTitle]}>Genre</Text>
          <View style={styles.genreContainer}>
            {data?.genreList?.map((item, index) => (
              <View style={styles.genreLabelContainer}>
                <Text style={[globalStyles.whiteText, styles.minutes]}>
                  {item.value}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.infoContainer}>
          <Text style={[globalStyles.whiteText, styles.dateTitle]}>
            Crew
          </Text>
          <Text style={[globalStyles.whiteText, styles.minutes]}>
            <Text>{movieData?.crew}</Text>
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[globalStyles.whiteText, styles.dateTitle]}>
            Rank
          </Text>
          <Text style={[globalStyles.whiteText, styles.minutes]}>
            <Text>{movieData?.rank}</Text>
          </Text>
        </View>
    </View>
  );
};

export default DetailInfo;
