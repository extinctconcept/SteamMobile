/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles/styles';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    /*** Mounting ***/
    componentDidMount() {
       
    }

    static navigationOptions = {
        title: 'Home',
        headerTintColor: '#007aff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    };



    render() {
        return (
            <View>
                <Container style={styles.container}>
                </Container>
            </View>
        );
    }

}


export default connect()(Home);

