import React, {useState}from 'react';

import { TouchableOpacity, View, Text, Button, StyleSheet, SafeAreaView, Image, TextInput } from 'react-native';

import ImageViewer from '../components/ImageViewer'
import TopRow from '../components/TopRow'
import FiltersRow from '../components/FiltersRow'
import SearchBar from '../components/SearchBar'
import TotalEvents from '../components/TotalEvents'
import MyButton from '../components/MyButton'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MonthView from '../components/MonthView'

import BottomRow from '../components/BottomRow'
const calendarIcon = require('../assets/images/calendar-icon.png');
const searchIcon = require('../assets/images/search-icon.png'); 

function HomeScreen({ navigation }) {
    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../assets/fonts/Itim-Regular.ttf'),
      });

      /*
    if (!fontsLoaded) {
        return <AppLoading/>
    }*/

    const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.safeAreaView}>
        <TopRow navigation={navigation}/>
        <View style={styles.gap}/>

        <FiltersRow/>
        <View style={styles.gap}/>


        <SearchBar navigation={navigation} style={styles.searchBar}/>
        <View style={styles.gap}/>

        <TotalEvents/>
        <View style={styles.gap}/>

        <MonthView/>
        <View style={styles.gap}/>

        <BottomRow/>


        
    </SafeAreaView>
    
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    search: {
        borderRadius: 20,
    },
    searchBar: {

    },
    searchIcon: {
        flex: 1,
    },
    searchIconContainer: {
        flex: 1,
    },
    safeAreaView: {
        flex: 1,
        backgroundColor: '#D9D9D9',

    },
    topRow: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor: '#D9D9D9',
    },
    leftText: {
        color: '#777070',
        fontFamily: 'IrishGrover-Regular',
        fontSize: 40,
        width: 200,
        textAlign: 'center',
        marginRight: 25,
    },
    rightTextContainer: {
        width: 200,
    },
    rightText: {
        fontFamily: 'Itim-Regular',
        fontSize: 40,
    },
    gap: {
        flex: 15,
        backgroundColor: '#FFFFFF',
    },
    searchBar: {
    }
})