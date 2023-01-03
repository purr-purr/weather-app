import React from "react";
import * as Location from 'expo-location';
import {Alert} from 'react-native';
import axios from 'axios';
import {API_KEY} from "./helpers/const";
import Loading from "./modules/common/components/Loading/Loading";
import Weather from "./modules/common/components/Weather/Weather";

export default class extends React.Component {
    state = {
        isLoading: true
    }

    getWeather = async (latitude, longitude) => {
        const {
            data: {
                main: {temp},
                name,
                weather
            }
        } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
        this.setState({
            isLoading: false,
            temp: temp,
            city: name,
            condition: weather[0].main,
        })
    }

    getLocation = async () => {
        try {
            await Location.requestForegroundPermissionsAsync();
            const {coords: {longitude, latitude}} = await Location.getCurrentPositionAsync();
            await this.getWeather(latitude, longitude);
        } catch (error) {
            Alert.alert(`Can't get your geolocation`);
        }
    }

    componentDidMount() {
        this.getLocation().then(r => console.log(r));
    }

    render() {
        const {isLoading, temp, condition, city} = this.state;
        return (
            isLoading ? <Loading/> : <Weather city={city} temp={temp} condition={condition}/>
        )
    }
};