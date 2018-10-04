import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';

export default class Weather extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
              <ImageBackground source={require('./AppBg.jpg')} resizeMode='cover' style={styles.backdrop}>
                <View style={styles.overlay}>
                  <View style={styles.row}>
                    <Text style={styles.mainText}>
                        Current weather for
                    </Text>
                    <View style={styles.zipContainer}>
                      <TextInput style={[styles.zipCode, styles.mainText]} onSubmitEditing={this._handleTextChange} 
                                  underlineColorAndroid="transparent"/>
                    </View>
                  </View>
                  {content}
                </View>
              </ImageBackground>
            </View>
          );
    }
}