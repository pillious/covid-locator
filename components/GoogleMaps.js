import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from "react-native-maps";

const GoogleMaps = ({region, location, handleRegionChange}) => {
    // const [marker, setMarker] = useState({latitude: 51.5078788, longitude: -0.0877321});

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={region}
                onRegionChangeComplete={region => handleRegionChange(region)}>
                <Marker coordinate={location}/>
            </MapView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    map: {
        width: 350,
        height: 350,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: 'rgb(242,242,242)'
    }
})

export default GoogleMaps;