import React from 'react'

import {View, StyleSheet, Text} from 'react-native'


function FiltersRow(navigation) {
    return (
        <View style={styles.container}>
            <Text>Search by name or keyword...</Text>
        </View>
    )
}

export default FiltersRow;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 20,
    }
})
