/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from './screens/HomeStart';


//disable warnings
console.disableYellowBox = true;


export default class App extends Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

const Root = createBottomTabNavigator(
  {
      Home: {
          screen: Home
      },
  },
  {  
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = FontAwesome;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        }

        // Any component can be returned here
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#80CED7',
      activeBackgroundColor: '#1f2123',
      inactiveTintColor: '#bfbabe',
      style: {
        backgroundColor: '#151616',
      },
    },
  }
);

const AppContainer = createAppContainer(Root);