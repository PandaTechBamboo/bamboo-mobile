import React from 'react'
import { useFonts } from 'expo-font';

import {View, StyleSheet, Text} from 'react-native'


function SearchBar(navigation) {
    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../assets/fonts/Itim-Regular.ttf'),
    });

    /*<View id="search-bar" style={styles.searchBar}>
    <TouchableOpacity id="search-icon-container" style = {styles.searchIconContainer} onPress={() => navigation.navigate('')}>
        <Image id="search-icon" style = {styles.searchIcon} source = {searchIcon}/>
    </TouchableOpacity>
    <TextInput id="search" style={styles.search} placeholder="search" value={search} onChangeText={setSearch}/>
</View> */

    return (
        <View style={styles.container}>
            <View style={styles.gap}/>
            <View style={styles.searchContainer}>
                <Text style={styles.searchText}>Search by name or keyword...</Text>
            </View>
            <View style={styles.gap}/>
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
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
        flex: 8,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
    },
    searchText: {
        fontFamily: 'Itim-Regular',
        paddingLeft: 20,
    }
})
