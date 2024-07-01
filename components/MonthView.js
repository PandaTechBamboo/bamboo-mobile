import React from 'react'

import {View, StyleSheet, Text} from 'react-native'
import { useFonts } from 'expo-font';

import WeekEvents from '../components/WeekEvents'
import WeekDays from '../components/WeekDays'
import colors from '../components/colors'

function MonthView () {

    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../assets/fonts/Itim-Regular.ttf'),
    });

    const month = 'May';
    const year = 2024;

    function RowGap() {
        return <View style={styles.rowGap}/>
    }

    return(
        <View style={styles.container}>
            <View style={styles.sideGap}/>
            <View style={styles.calendarView}>
                <WeekDays/>
                <RowGap/>

                <WeekEvents month={month} year={year} weekNumber={1}/>
                <RowGap/>

                <WeekEvents month={month} year={year} weekNumber={2}/>
                <RowGap/>

                <WeekEvents month={month} year={year} weekNumber={3}/>
                <RowGap/>

                <WeekEvents month={month} year={year} weekNumber={4}/>
                <RowGap/>

                <WeekEvents month={month} year={year} weekNumber={5}/>
                <RowGap/>

                <WeekEvents month={month} year={year} weekNumber={6}/>
            </View>
            <View style={styles.sideGap}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 470,
        flexDirection: 'row',
    },
    calendarView: {
        flexDirection: 'column',
        backgroundColor: colors.gray1,
        flex: 37,
    },
    sideGap: {
        flex: 1,
        backgroundColor: colors.white,
    },
    rowGap: {
        flex: 5,
        backgroundColor: colors.white,
    },
})

export default MonthView;