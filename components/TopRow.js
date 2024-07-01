import React from 'react';

import { TouchableOpacity, View, Text, Button, StyleSheet } from 'react-native';

import MyButton from './MyButton'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const calendarIcon = require('../assets/images/calendar-icon.png');
const searchIcon = require('../assets/images/search-icon.png'); 

function TopRow({ navigation }) {
    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../assets/fonts/Itim-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading/>
    }

  return (
    <View id = "top-row" style={styles.topRow}>
        <Text id="title" style={styles.leftText} >BAMBOO</Text>

        <View style={styles.calendarContainer}>
            <MyButton id="calendar-icon" theme='calendar-icon' onPress={() => navigation.navigate('MonthNavigationScreen')}/>

        </View>


        <TouchableOpacity id = "current-day" onPress={() => navigation.navigate('Details')} style={styles.dayContainer}>
            <Text style = {styles.rightText}>May 2027</Text>
        </TouchableOpacity>
    </View>  
  );
}

export default TopRow;

const styles = StyleSheet.create({
    calendarContainer: {
        flex: 1,
        alignItems: 'center',
    },
    topRow: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor: '#D9D9D9',
        flex: 70,
        fontSize: 32,
    },
    leftText: {
        color: '#777070',
        fontFamily: 'IrishGrover-Regular',
        fontSize: 40,
        flex: 4,
        textAlign: 'center',
    },

    rightText: {
        fontFamily: 'Itim-Regular',
        fontSize: 40,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    dayContainer: {
        flex: 4,
    }
})