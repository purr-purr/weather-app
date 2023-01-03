import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243B55'],
        title: 'Stay at Home',
        subtitle: `Do you see what's outside?`
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5', '#3a6073'],
        title: 'Take an umbrella',
        subtitle: 'Maybe the rain will get worse soon'
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046', '#1CB5E0'],
        title: `It's raining outside`,
        subtitle: 'So soon there will be a rainbow!'
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff'],
        title: 'Snowball outside!',
        subtitle: 'Dress warm, make snowmen'
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#94716B'],
        title: 'Dusty',
        subtitle: 'Better close your windows'
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'Smog on the street :(',
        subtitle: `I don't advise you to go out unnecessarily`
    },
    Haze: {
        iconName: 'weather hazy',
        gradient: ['#3E5151', '#DECBA4'],
        title: 'Snowball outside!',
        subtitle: 'Dress warm, make snowmen'
    },
    Mist: {
        iconName: 'weather fog',
        gradient: ['#606c88', '#3f4c6b'],
        title: `I can't see a damn thing in the fog`,
        subtitle: 'But like in Silent Hill :)'
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'The weather is great :)',
        subtitle: 'Go for a walk, stop staying at home!'
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757F9A', '#D7DDE8'],
        title: 'Clouds',
        subtitle: 'White-maned horses'
    },
}

const Weather = ({temp, condition, city}) => {
    const sliceTemp = (data) => {
        const toString = data.toString();
        const index = toString.lastIndexOf('.');
        return toString.slice(0, index);
    }

    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.container}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/>
                <Text style={styles.temp}>{sliceTemp(temp)}°</Text>
                <Text style={styles.city}>{city}</Text>
            </View>

            <View style={{...styles.container, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    },
    temp: {
        color: 'white',
        fontSize: 42
    },
    city: {
        color: 'white',
        fontSize: 24
    },
    title: {
        color: 'white',
        fontSize: 44,
        marginBottom: 20,
        fontWeight: '300'
    },
    subtitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: '600'
    }
});

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(
        [
            'Thunderstorm',
            'Drizzle',
            'Rain',
            'Snow',
            'Atmosphere',
            'Clear',
            'Clouds',
            'Mist',
            'Smoke',
            'Haze',
            'Dust',
            'Fog',
            'Sand',
            'Ash',
            'Squall'
        ]).isRequired,
}

export default Weather;

