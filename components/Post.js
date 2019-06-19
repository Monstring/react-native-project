import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class Post extends Component {

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.profileInformation}>
            <View style={styles.profileImage}></View>
            <Text style={{fontSize: 24}}>Username here</Text>
          </View>
          <View style={styles.image}></View>
        </View>
    );
  }

  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    paddingTop: 30
  },
  profileInformation: {
    alignItems: 'center',
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  profileImage: {
    width: 70,
    height: 70,
    backgroundColor: 'green',
    borderRadius: 100,
    borderWidth: 4,
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 350,
    backgroundColor: 'lightgreen'
  }
})
