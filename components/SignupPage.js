import React, { Component } from "react";
import { View, StyleSheet, TextInput, Button, } from "react-native";

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
      <View style={styles.container}>
        <View style={styles.half1}>

        </View>
        <View style={styles.half2}>
        <TextInput placeholder="Username" onChangeText={this.StoreUsername} />
        <TextInput placeholder="Password" onChangeText={this.StorePassword} secureTextEntry={true} />
        <TextInput placeholder="Confirm password" />
        <Button
          title="Sign up"
          disabled={false}
          onPress={() => console.log(JSON.stringify(this.state))}
        />
        </View>
      </View>
    );
  }

  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  half1:{
    flex: 2,
  },
  half2: {
    flex: 4,
    alignItems: 'center'
  }
})
