import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import SongScreen from "./screens/SongScreen";
import DanceSearchResultScreen from "./screens/DanceSearchResultScreen";
import SongSearchResultScreen from "./screens/SongSearchResultScreen";
import AdvancedSearchResultScreen from "./screens/AdvancedSearchResultScreen";

export default class App extends React.Component {
  componentDidMount() {
    // Is called when the component is mounted on the screen
  }

  render() {
    const MainNavigator = createBottomTabNavigator(
      {
        home: {
          screen: createStackNavigator({
            homeScreen: { screen: HomeScreen },
            danceResultScreen: { screen: DanceSearchResultScreen },
            songResultsScreen: { screen: SongSearchResultScreen },
            advancedResultsScreen: { screen: AdvancedSearchResultScreen}
          })
        },
        danceResults: {
          screen: createStackNavigator({
            danceResultsScreen: { screen: DanceSearchResultsScreen },
            home: { screen: HomeScreen }
          })
        },
        song: {
          screen: createStackNavigator({
            songScreen: { screen: SongScreen},
            home: { screen: HomeScreen}
          })

        },
        songResults: {
          screen: createStackNavigator({
            songResultsScreen: { screen: SongSearchResultScreen },
            song: { screen: SongScreen},
            home: { screen: HomeScreen }
          })
        },
        advancedResults: {
          screen: createStackNavigator({
            advancedResultsScreen: { screen: AdvancedSearchResultScreen },
            home: { screen: HomeScreen }
          }) 
        }
      },
      {
        navigationOptions: {
          tabBarVisible: false
        }
      }
    );

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}