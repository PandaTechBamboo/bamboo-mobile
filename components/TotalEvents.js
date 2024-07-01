import React from 'react'

import {View, StyleSheet, Text} from 'react-native'
import { useFonts } from 'expo-font';



function TotalEvents() {

    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../assets/fonts/Itim-Regular.ttf'),
    });

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.number}>1587 </Text>
                <Text style={styles.other}>Monthly Events</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    number: {
        fontSize: 20,
        fontFamily: 'Itim-Regular',
        color: '#000000'
    },
    textContainer:{
        flexDirection: 'row',
    },
    other: {
        fontSize: 20,
        fontFamily: 'Itim-Regular',
        color: '#505050'
    },
    container: {
        alignItems:'center', 
        justifyContent:'center',
        flex: 40,
    },
})

export default TotalEvents;