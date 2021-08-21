
/**
 * BLANK PAGE EXAMPLE
 *
 *
 *
 */

//  React & React Native Depedencies
import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList,Text} from 'react-native';
import {connect} from 'react-redux';
import globalStyles from '../../shared/globalStyles';
import MovieItems from '../MovieItems';
import styles from './styles';

const Trending = (props) => {
    const {Top250Movies} = props;

    const renderItem = ({item, index}) => {
        return <MovieItems item={item} index={index} />;
      };

  return (
    <View>
        <View>
         <Text style={[globalStyles.whiteText, styles.trendingLabel]}>Top 11 - 20 Movies</Text>
      </View>
    <FlatList
     contentContainerStyle={[styles.scrollContent]}
        data={Top250Movies?.data}
        keyExtractor={(i, idx) => idx.toString()}
        renderItem={renderItem}
        />
  </View>
  );
};

const mapStateToProps = (state) => {
    return {
        Top250Movies: state.generalReducer.top250MoviesList
    };
  };
  
  export default connect(mapStateToProps)(Trending);
  