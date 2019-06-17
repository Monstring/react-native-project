import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default class LoginPage extends Component {
  state = {
    Username: undefined,
    Password: undefined
  }
  
  StoreUsername = Username => {
    this.setState({ Username: Username });
  };
  StorePassword = Password => {
    this.setState({ Password: Password });
  };
  
  
  render() {
    return (
      <View style={{paddingTop: 50}}>
        <Text>Username</Text>
        <TextInput placeholder="Username" onChangeText={this.StoreUsername}/>
        <Text>Password</Text>
        <TextInput placeholder="Password" onChangeText={this.StorePassword} secureTextEntry={true}/>
        <Button title="Login" onPress={() => console.log(JSON.stringify(this.state))}/>
      </View>
    );
  }
}
