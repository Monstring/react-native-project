import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default class LoginPage extends Component {
  state = {
    Username: undefined,
    Password: undefined
  };

  StoreUsername = Username => {
    this.setState({ Username: Username });
  };
  StorePassword = Password => {
    this.setState({ Password: Password });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.half1} />
        <View style={styles.half2}>
          <Text>Username</Text>
          <TextInput placeholder="Username" onChangeText={this.StoreUsername} />
          <Text>Password</Text>
          <TextInput
            placeholder="Password"
            onChangeText={this.StorePassword}
            secureTextEntry={true}
          />
          <Button
            title="Login"
            onPress={() => console.log(JSON.stringify(this.state))}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  half1: {
    flex: 2
  },
  half2: {
    flex: 4,
    alignItems: "center"
  }
});
