import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';
import Forecast from "./Forecast";
import FetchForecast from './FetchForcast';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = { zip: "", forecast: null};
    }

    handleInput = event => {
        let zip = event.nativeEvent.text;
        this.setState({zip})
        FetchForecast.fetchForecast(zip).then(forecast => {
            this.setState({ forecast: forecast });
        });
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
                      <TextInput style={[styles.zipCode, styles.mainText]} onSubmitEditing={this.handleInput} 
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

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 30 },
  backdrop: { flex: 1, flexDirection: "column" },
  overlay: {
    paddingTop: 5,
    backgroundColor: "#000000",
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 60
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: { flex: 1, flexBasis: 1, width: 50, height: baseFontSize },
  mainText: { fontSize: baseFontSize, color: "#FFFFFF" }
});