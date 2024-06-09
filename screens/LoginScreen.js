import MyButton from '../components/MyButton';
import ImageViewer from '../components/ImageViewer';

import { StyleSheet, View, Text, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import React, { useState } from 'react';


const pandaImage = require('../assets/images/panda-with-highlight.png');

export default function LoginScreen({navigation}) {

    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../assets/fonts/IrishGrover-Regular.ttf'),
      });

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function checkLogin() {

    }
    
    return (
        <View style={styles.container}>
          <View style={styles.title}>
            <Text id = "title">
              BAMBOO
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <ImageViewer id = "panda-image"
              imageSource = {pandaImage} 
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              id = "username-input"
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                id = "password-input"
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
        </View>

          <View style={styles.footerContainer}>
            <MyButton 
            id="login-button"
            style={styles.button} 
            theme="basic" 
            label="Login"
            onPress={() => navigation.navigate('Home')}
            />
        </View>
          

          <StatusBar style="auto" />
        </View>
      );
}

/*
<View style={styles.container}>
          <View style={styles.title}>
            <Text>
              BAMBOO
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <ImageViewer 
              imageSource = {pandaImage} 
            />
          </View>
          
          <StatusBar style="auto" />
          
        </View>
*/ 

const styles = StyleSheet.create({
    title:{
      color: '#000',
      marginTop: 50,
    },
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
    },
    imageContainer: {
      paddingTop: 58,
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
        marginVertical: 20,
    },
    input: {
        width: 300,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10,
    },
    footerContainer: {
      marginTop: 50,
      alignItems: 'center',
    },
    customFontText: {
        fontFamily: 'IrishGrover-Regular', // Replace with the actual font family name
        fontSize: 24,
      },
    button: {
        width: 300,
    }
  });
  
