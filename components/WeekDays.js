import React from 'react'

import {View, StyleSheet, Text} from 'react-native'
import { useFonts } from 'expo-font';

import colors from '../components/colors'

function WeekDays() {
    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../assets/fonts/Itim-Regular.ttf'),
    });


    function Day({label}) {
        return(
            <View style={dayStyles.dayContainer}>
                <Text style={dayStyles.text}>{label}</Text>
            </View>
        )
    }

    const dayStyles = StyleSheet.create({
        dayContainer: {
            flex: 50,
            backgroundColor: colors.gray2,
        },
        text: {
            fontFamily: 'Itim-Regular',
            fontSize: 20,
            color: colors.white,
            textAlign: 'center'

        }
    })

    return(
        <View style={styles.container}>
            <Day label="Sun"/>
            <View style={styles.gap}/>
            <Day label="Mon"/>
            <View style={styles.gap}/>
            <Day label="Tue"/>
            <View style={styles.gap}/>
            <Day label="Wed"/>
            <View style={styles.gap}/>
            <Day label="Thu"/>
            <View style={styles.gap}/>
            <Day label="Fri"/>
            <View style={styles.gap}/>
            <Day label="Sat"/>
        </View>
    )
}
    

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 20,
    },
    gap: {
        flex: 4,
        backgroundColor: colors.white
    },
})

export default WeekDays;