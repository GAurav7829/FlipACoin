import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {

  state = {
    coin_result: 'head'
  }

  flipACoin = () => {
    const random = Math.floor(Math.random() * 2) + 1;
    if (random == 1) {
      this.setState({ coin_result: 'head' })
    } else {
      this.setState({ coin_result: 'tail' })
    }
  }
  render() {
    return (<View style={styles.container}>
      {
        this.state.coin_result == 'head' ?
          <Image source={require(`./assets/coin_h.png`)}
            style={{
              width: 150,
              height: 150
            }}
          /> :
          <Image source={require(`./assets/coin_t.png`)}
            style={{
              width: 150,
              height: 150
            }}
          />
      }
      <TouchableOpacity style={styles.button} onPress={() => {
        this.flipACoin()
      }}>
        <Text>Flip</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#f1c40f',
    padding: 20,
    margin: 10,
    borderRadius: 4
  }
});
