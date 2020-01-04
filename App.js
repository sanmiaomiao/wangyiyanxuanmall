/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Index from './src/index/index';
import Search from './src/search/search';
import SearchResult from './src/searchresult/searchresult';



const AppNavigator = createStackNavigator({
        Index: Index,
        Search: Search,
		SearchResult:SearchResult,
    },
    {
        initialRouteName: 'Index',
    });


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
