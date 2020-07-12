import React from 'react';
import {StyleSheet} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';

const RiskBar = ({riskNum}) => {
    return <ProgressBar progress={riskNum/10} color={"rgba(231, 76, 60, 0.8)"} style={styles.progress}/>;
}

const styles = StyleSheet.create({
    progress: {
        height: 7,
        width: 250,
        backgroundColor: "rgba(231, 120, 60, 0.3)",
        borderWidth: 1,
        borderColor: "#ce6a5f",
        marginTop: 20
    }
})

export default RiskBar;