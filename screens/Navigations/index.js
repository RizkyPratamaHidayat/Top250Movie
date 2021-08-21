import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Home from '../Home';
import Detail from '../Detail';
import {NavigationContainer} from '@react-navigation/native';
import options from './navigationOptions';
import {fetch250Movies} from '../../redux';
import {navigationRef} from '../../helpers/navigationRef';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const Tabs = props => {
  const routeNameRef = React.createRef();

  const onRouteChange = () => {
    const currentRouteName = navigationRef.current.getCurrentRoute().name;
    routeNameRef.current = currentRouteName;
  };

  useEffect(() => {
    props.fetch250Movies();
  }, []);

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onRouteChange}>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} options={options.home} />
        <Stack.Screen
          name="detail"
          component={Detail}
          options={options.detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {fetch250Movies})(Tabs);
