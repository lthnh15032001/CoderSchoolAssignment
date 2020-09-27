import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { Router } from './src/navigation'

const App = () => {
  return (
    <View style={styles.container}>
      <Router />
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});