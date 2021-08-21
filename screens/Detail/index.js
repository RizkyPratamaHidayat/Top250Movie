
/**
 * BLANK PAGE EXAMPLE
 *
 *
 *
 */

//  React & React Native Depedencies
import React, {useState, useEffect, useRef} from 'react';
import {View, ScrollView, RefreshControl, Text,Button} from 'react-native';
// End React Native import
import {pop} from '../../helpers/navigationRef'
// 3rd Party / Library Depedencies
import {connect} from 'react-redux';
import DetailInfo from '../../components/DetailInfo';
import {getMovieDetail} from '../../helpers/request'
import Banner from '../../components/BannerDetail';
// End 3rd party import

// Styling Depedencies
import globalStyles from '../../shared/globalStyles';
import styles from './styles';

// End styling import

// Media Import / Variable Init

// End Media Import / Variable Init

const Detail = (props) => {
    const {id} = props.route.params;
    const [data, setData] = useState();

useEffect(()=>{
  const params = {
    id : id,
  }
  getMovieDetail(params).then((res)=>{
    console.log(res)
    setData(res);
  }).catch((err)=>{
    console.log('Request Failed : ', err);
  })
},[])
  return (
    <ScrollView style={[globalStyles.scrollViewRoot, styles.root]}>
      <Banner data={data?.image}/>
      <DetailInfo data={data} />
  </ScrollView>
  );
};

export default Detail;
