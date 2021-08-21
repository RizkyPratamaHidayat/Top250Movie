import * as React from 'react';
import {Text, View, Dimensions} from 'react-native';

import {WebView} from 'react-native-webview';

const Movie = (props) => {
  const {url} = props.route.params;
  console.log(url)
  return (
    <WebView
    style={{backgroundColor:'black'}}
      source={{
        html:
          `<iframe width="100%" height="100%" src=${url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`,
      }}
    />
  );
};

export default Movie;
