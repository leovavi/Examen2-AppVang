import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Search from "./Search";
import JobList from "./JobList";
import Detail from "./Detail";

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

export const AppNavigator = createStackNavigator(
  {
    Home: Search,
    Jobs: JobList,
    Detail: Detail
  },
  {
    initialRouteName: "Home"
  }
)

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
