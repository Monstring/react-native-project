import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default class LoginPage extends Component {
  render() {
    return (
      <View>
        <Text>Username</Text>
        <TextInput placeholder="Username" />
        <Text>Password</Text>
        <TextInput placeholder="Password" />
        <Button title="Login" />
      </View>
    );
  }
}
