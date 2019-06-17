import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default class SignupPage extends Component {
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
      <View style={{ paddingTop: 50 }}>
        <TextInput placeholder="Username" onChangeText={this.StoreUsername} />
        <TextInput placeholder="Password" onChangeText={this.StorePassword} secureTextEntry={true} />
        <TextInput placeholder="Confirm password" />
        <Button
          style={{ paddingTop: 10 }}
          title="Sign up"
          disabled={false}
          onPress={() => console.log(JSON.stringify(this.state))}
        />
      </View>
    );
  }
}
