import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {nz, wp} from '../helpers/responsive';
import stylesVar from '../shared/stylesVar';

export default StyleSheet.create({
  scrollViewRoot: {
    backgroundColor: stylesVar.theme.bg1,
  },
  whiteText:{
    color: stylesVar.theme.darkWhite,
  },
  horizontalContentScroll: {
    paddingHorizontal: wp(20),
  },
});
