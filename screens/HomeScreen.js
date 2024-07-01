import React, {useState}from 'react';

import { TouchableOpacity, View, Text, Button, StyleSheet, SafeAreaView, Image, TextInput } from 'react-native';

import ImageViewer from '../components/ImageViewer'
import TopRow from '../components/TopRow'
import FiltersRow from '../components/FiltersRow'
import TotalEvents from '../components/TotalEvents'
import MyButton from '../components/MyButton'
import { useFonts } from 'expo-font';
import MonthView from '../components/MonthView'

import BottomRow from '../components/BottomRow'
const calendarIcon = require('../assets/images/calendar-icon.png');
const searchIcon = require('../assets/images/search-icon.png'); 

function HomeScreen({ navigation }) {
    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../assets/fonts/Itim-Regular.ttf'),
        'Besley-Regular' : require('../assets/fonts/Besley-Regular.ttf'),
        'Besley-Italic' : require('../assets/fonts/Besley-Italic.ttf')
      });

      /*
    if (!fontsLoaded) {
        return <AppLoading/>
    }*/

    const [searchInput, setSearchInput] = useState('');

    const searchBarStyles = StyleSheet.create({
        container: {
            flex: 40,
            alignItems:'center', 
            justifyContent:'center',
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            marginTop: 0,
        },
        gap: {
            flex: 1,
        },
        searchContainer: {
            flexDirection: 'row',
            flex: 8,
            backgroundColor: '#D9D9D9',
            borderRadius: 50,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        searchText: {
            fontFamily: 'Itim-Regular',
            paddingLeft: 20,
            color: '#FFFFFF',
            fontSize: 25,
            fontFamily: 'Besley-Italic',
        }
    })

  return (
    <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
            <TopRow navigation={navigation}/>
            <View style={styles.gap}/>

            <FiltersRow/>
            <View style={styles.gap}/>


            <View style={searchBarStyles.container}>
                <View style={searchBarStyles.gap}/>
                <View style={searchBarStyles.searchContainer}>
                    <ImageViewer theme="searchIcon" imageSource={searchIcon}/>
                    <TextInput 
                        style={searchBarStyles.searchText}
                        placeholder="Search for an event..."
                        value={searchInput}
                        onChangeText={setSearchInput}
                    />
                </View>
                <View style={searchBarStyles.gap}/>
            </View>

            

            <View style={styles.gap}/>

            <TotalEvents/>
            <View style={styles.gap}/>

            <MonthView/>
            <View style={styles.gap}/>

            <BottomRow/>
        </View>
        
    </SafeAreaView>
    
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },
    gap: {
        flex: 15,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        width: 500,
    }



})