import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Map from "./Map";
import Settings from "./Settings";
import Location from "./Location";

const Tab = createBottomTabNavigator();

export default function TabBar() {
    return (
        <NavigationContainer>
            {/* <Tab.Navigator tabBar={props => <TabBarOld {...props} />}> */}
            <Tab.Navigator>
                <Tab.Screen
                    name="Map"
                    icon="map"
                    component={Map}
                    options={{
                    tabBarIcon: () => <Icon name="map" size={20}/>
                }}/>
                <Tab.Screen
                    name="Location"
                    icon="location-arrow"
                    component={Location}
                    options={{
                    tabBarIcon: () => <Icon name="location-arrow" size={20}/>
                }}/>
                <Tab.Screen
                    name="Settings"
                    icon="gear"
                    component={Settings}
                    options={{
                    tabBarIcon: () => <Icon name="gear" size={20}/>}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}