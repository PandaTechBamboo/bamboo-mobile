import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginScreenFlex from '../components/FlexItems';
import SignIn from '../components/LoginScreen/SignIn'

import React from 'react';

export default function LoginScreen({navigation}) {
    return (
      <View style={styles.container}>
        
        <Text>Hi</Text>
        
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      flexDirection: 'column',
    },
  }
);
  
