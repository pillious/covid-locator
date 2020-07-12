import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import RiskBar from './RiskBar';

const Card = ({cityName, riskNum, riskWord}) => {

    return (
        <View style={styles.containers}>
            <Text style={styles.header}>{cityName}</Text>
            <Text style={styles.text}><Text>Risk: </Text>{riskNum} ({riskWord})</Text>
            <RiskBar riskNum={riskNum} riskWord={riskWord} />
        </View>
    );
}

const styles = StyleSheet.create({
    containers: {
        width: 350,
        marginTop: 30,
        marginBottom: 30,
        paddingTop: 25,
        paddingBottom: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: 'rgb(242,242,242)'
    },
    header: {
        color: "#e7a33c",
        fontSize: 40,
        marginBottom: 15
    },
    text: {
        fontSize: 30
    }
});

export default Card;