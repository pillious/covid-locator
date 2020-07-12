import React, {useState, useEffect} from 'react';
import {View, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'react-native-axios';
import places from '../Modules/counties';
import RiskDisplay from './Risk/RiskDisplay';
import GoogleMaps from "./GoogleMaps";
// import MapContainer from "./MapContainer";

const Map = () => {

    // useEffect(() => {
    //     async function x() {
    //         const permission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    //         console.log(permission)
    //         if (permission) {
    //             console.log("You can use the ACCESS_FINE_LOCATION")
    //             Geolocation.getCurrentPosition(
    //                 (position) => {
    //                   console.log(position);
    //                 },
    //                 (error) => {
    //                   // See error code charts below.
    //                   console.log(error.code, error.message);
    //                 },
    //                 { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    //             );
    //         } else {
    //             console.log("Requesting ACCESS_FINE_LOCATION");
    //             const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
    //                 'title': 'Enable Location Permissions',
    //                 'message': 'App needs access to you location to display further information.'
    //             })
    //             console.log(granted);
    //         }
    //     }
    //     x();
    // })
    // {latitudeDelta: 0.009, longitudeDelta: 0.009}

    const [region,
        setRegion] = useState({latitude: 42.3600825, longitude: -71.0588801, latitudeDelta: 0.009, longitudeDelta: 0.009});
    const [location,
        setLocation] = useState({latitude: 42.3600825, longitude: -71.0588801});

    // var city = places[0];
    const [city, setCity] = useState(places[Math.floor(Math.random() * places.length)]);
    const [risk, setRisk] = useState({
        riskNum: 0.0,
        riskWord: ""
    });

    useEffect(() => {
        handleRegionChange(city.coords);
        handleLocationChange(city.coords);

        getCityInfo();
    }, [])

    const ipAddress = /* IP ADDRESS HERE */
    async function getCityInfo() {   
        var url = `http://${ipAddress}:5000/risk/${city.state}/${city.county}`;
        var {data} = await axios.get(url);
        updateRisk(data);
    }

    function updateRisk({riskNum, riskWord}) {
        setRisk({riskNum: riskNum, riskWord: riskWord});
    }

    function handleRegionChange(region) {
        setRegion({
            ...region,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009
        });
    }

    function handleLocationChange(region) {
        setLocation(region);
    }

    return (
        <View>
            <RiskDisplay cityName={city.city} riskNum={risk.riskNum} riskWord={risk.riskWord}></RiskDisplay>
            <GoogleMaps
                region={region}
                location={location}
                handleRegionChange={handleRegionChange}></GoogleMaps>
        </View>
    );
}

export default Map;