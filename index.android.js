/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity
} from 'react-native';
import Header from './src/component';

export default class pirmaUzduotis extends Component {

  constructor(){
    super()
    this.state = {
      componetsUsed: 7,
      startText: 'Paspaude mygtuka suzinosite daugiau',
     }
   }
   
   updateText = () => {
     Alert.alert('\t\t\t\t\t\t\t\t\t\t\t Sveikinu!','Dabar galite matyti panaudotus komponentus');
    this.setState({startText: 'Panaudoti komponentai: \n AppRegistry \n StyleSheet \n Text \n View \n Image \n AppRegistry \n TouchableOpacity \n Alert '})
  }

  render() {
    return (
      
        <Image style={styles.container} 
        source={{uri: 'https://www.desktopbackground.org/download/1080x1920/2015/11/30/1050111_enter-the-wormhole-anomalous-wallpapers_4096x3112_h.jpg'}}> 

        <Header/>

        <Text style={styles.welcome}>
          Pirma React Native programa!
        </Text>
        <Text style={styles.instructions}>
          Paspauskite mygtuka, kad suzinotumete daugiau
        </Text>
        <TouchableOpacity 
        style={{ height: 35, width:225, marginTop: 20, marginBottom: 20, backgroundColor: '#00bc67' }}>
             <Text
               onPress = {this.updateText}
               style={{ textAlign: 'center', color:'#ffffff',margin: 8, fontSize:16 }}>
                 SUZINOKITE
             </Text>
          </TouchableOpacity>
        <Text style={styles.instructions}>
        {this.state.startText}
        </Text>


        </Image>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  imageContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 36,
    textAlign: 'center',
   // margin: 10,
    marginBottom:45,
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
    color: '#ffffff',
    fontSize: 20,
    marginBottom:45,
  },
  buttons: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 45,
    width: 55,
  },
});

AppRegistry.registerComponent('pirmaUzduotis', () => pirmaUzduotis);
