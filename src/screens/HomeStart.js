/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { createStackNavigator } from 'react-navigation'
import Home from './Home';

export default createStackNavigator({
    Home,
},
{
    initialRouteName: 'Home'
});