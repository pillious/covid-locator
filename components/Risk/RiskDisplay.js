import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Card from './Card';

const RiskDisplay = ({cityName, riskNum, riskWord}) => {
    return (
        <View style={styles.container}>
            <Card cityName={cityName} riskNum={riskNum} riskWord={riskWord} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default RiskDisplay;