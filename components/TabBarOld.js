import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// function TabBar({state, descriptors, navigation}) {
export default function TabBar(props) {
    var state = props.state;
    var descriptors = props.descriptors;
    var navigation = props.navigation;
    console.log(props.icon);
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
                const isFocused = state.index === index;
                
                const onPress = () => {
                    const event = navigation.emit({type: 'tabPress', target: route.key});
                    
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({type: 'tabLongPress', target: route.key});
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused
                        ? ['selected']
                        : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                        flex: 1
                    }}>
                    <View>
                        <Text style={{color: isFocused? '#673ab7': '#222'}}>
                            {label}
                        </Text>
                    </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
})