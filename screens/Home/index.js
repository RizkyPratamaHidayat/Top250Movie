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
  TouchableOpacity,
} from 'react-native';
import globalStyles from '../../shared/globalStyles';
import styles from './styles';
import {getTrailerBanner} from '../../helpers/request';
import Banner from '../../components/Banner';
import Trending from '../../components/Trending';
import Movies from '../../components/MoviesList';
const Home = props => {
  const [banner, setBanner] = useState();
  useEffect(() => {
    getTrailerBanner()
      .then(res => {
        setBanner(res);
      })
      .catch(err => {
        console.log('Failed to Request data : ', err);
      });
  }, []);
  return (
    <ScrollView style={[globalStyles.scrollViewRoot, styles.root]}>
      <View>
        <Text style={styles.titleLabel}>
          Stream <Text style={globalStyles.whiteText}>Everywhere</Text>
        </Text>
      </View>
      <Banner data={banner}/>
      <Trending />
      <Movies />
    </ScrollView>
  );
};

export default Home;
