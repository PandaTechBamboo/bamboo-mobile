import MyButton from '../components/MyButton';
import ImageViewer from '../components/ImageViewer';

import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import React, { useState } from 'react';

export default function LoginScreen({navigation}) {

    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../assets/fonts/Itim-Regular.ttf'),
      });

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function checkLogin() {

    }

    /////////////////////////////////// Title
    function TitleText(){
      return (
        <View style={titleStyles.titleContainer}>
          <Text style={titleStyles.title}>
            BAMBOO
          </Text>
        </View>
      )
    }

    const titleStyles = StyleSheet.create({
      titleContainer:{
        color: '#000',
        flex: 5,
        backgroundColor: '#00FF00',
        flexDirection: 'column',
      },
      title: {
        fontFamily: 'IrishGrover-Regular',
        flex: 1,
        fontSize: 70,
      },
    })

    /////////////////////////////////// Panda Logo
    const pandaImage = require('../assets/images/panda-with-highlight.png');

    function PandaLogo() {
      return (
        <></>
      )
    }

    const logoStyles = StyleSheet.create({
      imageContainer: {
        backgroundColor: '#00FF00',
      },
      image:{
        // 5:6 proportions
        width: 200,
        height: 240,
        borderRadius: 18,
      }
    })

    /////////////////////////////////// Username-Password Input
    function UsernamePasswordInput(){
      return(
        <></>
      )
    }

    const inputStyles = StyleSheet.create({
      inputContainer: {
        width: '80%',
        alignItems: 'center',
        flex: 5,
      },
      input: {
          width: 300,
          height: 40,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          fontFamily: 'Itim-Regular',
          color: '#FFFFFF',
          backgroundColor: '#D9D9D9',
          paddingLeft: 15,
          fontStyle: 'italic',
          fontSize: 17,
          flex: 5,
      },
    })

    /////////////////////////////////// Sign In Button
    function SignInButton() {
      return (
        <View style={signInStyles.footerContainer}>
          <TouchableOpacity style={signInStyles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={signInStyles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>)
    }

    const signInStyles = StyleSheet.create({
      button: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#726969',
        flexDirection: 'column',
        paddingTop: 30,
      },
      footerContainer: {
        alignItems: 'center',
        flexDirection: 'column',
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Itim-Regular',
      },
    })

    /////////////////////////////////// Rectangle Buttons
    function RectangleButtons() {
      return (
        <View>
          <TouchableOpacity style={buttonsStyles.buttonContainer} onPress={() => navigation.navigate('SignUp')}>
            <Text style={signInStyles.text}>Sign Up</Text>
          </TouchableOpacity>


          <TouchableOpacity style={buttonsStyles.buttonContainer} onPress={() => navigation.navigate('Home')}>
            <Text style={signInStyles.text}>Continue as a Guest</Text>
          </TouchableOpacity>
        </View>
      )
      
    }

    const buttonsStyles = StyleSheet.create({
      buttonContainer: {
        width: 300,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontFamily: 'Itim-Regular',
        color: '#FFFFFF',
        backgroundColor: '#D9D9D9',
        paddingLeft: 15,
        fontStyle: 'italic',
        fontSize: 17,
      },
      text: {
        textAlign: 'center',
      }
    })


    /////////////////////////////////// Main return
    
    return (
        <View style={styles.container}>

          <View style={styles.gap}/>
          <TitleText/>

          <View style={styles.gap}/>
          <View style={logoStyles.imageContainer}>
            <ImageViewer theme="basic" imageSource={pandaImage}/>
          </View>

          <View style={styles.gap}/>
          
          <View style={inputStyles.inputContainer}>
          <TextInput
              style={inputStyles.input}
              placeholder="Username..."
              value={username}
              onChangeText={setUsername}
          />
         <View style={styles.miniGap}/>

          <TextInput
            style={inputStyles.input}
            placeholder="Password..."
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.gap}/>

          <SignInButton/>

          <RectangleButtons/>
        
          <StatusBar style="auto" />
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
    gap: {
      flex: 2,
      backgroundColor: '#FF000000'
    },
    miniGap: {
      flex: 1,
      backgroundColor: '#FF000000'
    }
  }
);
  
