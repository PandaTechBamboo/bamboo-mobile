import React from 'react'

import {View, StyleSheet} from 'react-native'
import { useFonts } from 'expo-font';


function MonthView () {

    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../assets/fonts/Itim-Regular.ttf'),
    });

    return(
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 470,
    }
})

export default MonthView;