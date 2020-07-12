import * as React from 'react';
import { View, Image, StyleSheet, Alert } from 'react-native';
import { List, Appbar } from 'react-native-paper';

const Location = () => {
  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

    const alertFunc = (title, text) => {
        Alert.alert(title, text, [
            { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: true });
    };

    return (
        <View>
            <Appbar.Header>
                <Appbar.Content title="Location" subtitle="Places you've been to..." />
                <Appbar.Action icon="magnify" onPress={_handleSearch} />
                <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
            </Appbar.Header>
            <List.Item
                title="Statue of Liberty"
                description="Risk: 1.4 (Minimal)"
                left={() => <Image style={styles.image} source={require('./images/statue.jpg')}/>}
                onPress = {() => alertFunc("Statue of Liberty", "You were here 15 hours ago.")}
            />
            <List.Item
                title="Times Square"
                description="Risk: 5.3 (Moderate)"
                left={() => <Image style={styles.image} source={require('./images/times_square.jpg')}/>}
                onPress = {() => alertFunc("Times Square", "You were here at 3:23 am last Sunday.")}
            />
            <List.Item
                title="Central Park"
                description="Risk: 9.9 (High)"
                left={() => <Image style={styles.image} source={require('./images/central_park.jpg')}/>}
                onPress = {() => alertFunc("Central Park", "You spent 2 hours here with your parents.")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    }
});

export default Location;