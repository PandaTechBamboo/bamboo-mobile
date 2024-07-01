import React from 'react'

import {View, StyleSheet, Text} from 'react-native'
import { useFonts } from 'expo-font';

function WeekEvents({month, year, weekNumber}) {

    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../assets/fonts/Itim-Regular.ttf'),
    });

    function Day() {
        return (
            <View style={styles.dayContainer}>
                <View style={styles.dayTop}>
                    <Text style={styles.topText}/>
                </View>

                <View style={styles.dayBottom}>
                    <Text style={styles.bottomText}/>
                </View>
            </View>
        )
    }

    function ColumnGap() {
        return <View style={styles.columnGap}/>
    }

    return (
        <View style={styles.container}>
            <Day/>
            <ColumnGap/>
            <Day/>
            <ColumnGap/>
            <Day/>
            <ColumnGap/>
            <Day/>
            <ColumnGap/>
            <Day/>
            <ColumnGap/>
            <Day/>
            <ColumnGap/>
            <Day/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 70,
    },
    dayContainer: {
        flex: 50,
        flexDirection: 'column',
    },
    dayTop: {
        flex: 20,
        backgroundColor: '#000000'
    },
    dayBottom: {
        flex: 50,
        backgroundColor: '#D9D9D9'
    },
    topText: {
        color: '#FFFFFF',
        fontFamily: 'Itim-Regular',
        textAlgin: 'center',
        fontSize: 10,
    },
    bottomText: {
        color: '#000000',
        fontFamily: 'Itim-Regular',
        textAlgin: 'center',
        fontSize: 20,
    },
    columnGap: {
        flex: 4,
        backgroundColor: '#FFFFFF',
    }
})

export default WeekEvents;