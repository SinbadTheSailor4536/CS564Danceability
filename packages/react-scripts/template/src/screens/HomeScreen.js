import React, { Component } from "react";
import {
    View,
    Platform,
    Alert,
    ScrollView,
    RefreshControl,
    Dimensions,
    StyleSheet
  } from "react-native";
  import { Button, Text } from "react-native-elements";

  export default function HomeScreen({ navigation }) {
    return (
        <div className="App">
          <header className="App-header">
            <h1>
              Danceability
            </h1>
            <p>
              An app for Dancing Musicality
            </p>
          </header>
        </div>
    );
}