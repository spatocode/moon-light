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
    let content = null;
    const baseFontSize = 16;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: "center",
        // paddingTop: 30
      },
      backdrop: { flex: 1, flexDirection: "column" },
      overlay: {},
      row: {
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        padding: 100
      },
      zipContainer: {
        alignItems: "center",
      },
      zipCode: {
        // flex: 1,
        // flexBasis: 1,
        width: 200,
        height: 40,
        color: "#FFFFFF",
        backgroundColor: "#000000",
        opacity: 0.5,
      },
      mainText: {
        fontSize: baseFontSize*2.5,
        color: "#FFFFFF",
        marginBottom: 200
      }
    });

    if (this.state.forecast !== null) {
      content = (
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
        />
      )
    }

    return (
      <View style={styles.container}>
        <ImageBackground source={require('./AppBg.jpg')} resizeMode='cover' style={styles.backdrop}>
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                MoonLight
              </Text>
              <View style={styles.zipContainer}>
                <Text style={{color: "#FFFFFF", marginBottom: 25}}>Enter a zip code</Text>
                <TextInput style={styles.zipCode} onSubmitEditing={this.handleInput} 
                  textAlign="center" autoFocus={true} keyboardType="numeric"
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
