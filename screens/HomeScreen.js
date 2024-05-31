import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const calendarIcon = require('../assets/images/calendar-icon.png');

function HomeScreen({ navigation }) {
  return (
    <View style={styles.topRow}>
      <Text style={styles.leftText}>PTBamboo</Text>

      <MyButton theme='calendar-icon' onPress={() => navigation.navigate('MonthNavigationScreen')}/>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    topRow: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor: '#465',
    },
    leftText: {
        marginRight: 50,
    },
    rightText: {

    },
})