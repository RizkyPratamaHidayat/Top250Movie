import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';

/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 360, 640 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const wp = dimension => {
  return wp2dp((dimension / 360) * 100 + '%');
};

/**
 * Height-Percentage
 * Converts width dimension to percentage
 * * 360, 640 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const hp = dimension => {
  return hp2dp((dimension / 640) * 100 + '%');
};

/**
 * Font-Percentage
 * Recalaculate font value
 * * Standard Screen Height for font calculating is 640 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const fp = fontSize => {
  return RFValue(fontSize, 640);
};

export const nz = size => {
  /**
   * Normalize styling, select on of method from above currently selected method is RFValue-Percentage
   * @param dimension directly taken from design wireframes
   * @returns {string} percentage string e.g. '25%'
   */
  return RFValue(size);
};
