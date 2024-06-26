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
        flex: 60,
        flexDirection: 'column',
      },
      title: {
        fontFamily: 'IrishGrover-Regular',
        color: '#777070',
        flex: 1,
        fontSize: 60,
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
        flexDirection: 'column',
        flex: 190,
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
        flex: 100,
      },
      input: {
          width: 300,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 5,
          fontFamily: 'Itim-Regular',
          color: '#FFFFFF',
          backgroundColor: '#D9D9D9',
          paddingLeft: 15,
          fontStyle: 'italic',
          fontSize: 25,
          flex: 40,
      },
    })

    /////////////////////////////////// Sign In Button
    function SignInButton() {
      return (
        <View style={signInStyles.container}>
          <TouchableOpacity style={signInStyles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={signInStyles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>)
    }

    const signInStyles = StyleSheet.create({
      button: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 100,
        backgroundColor: '#726969',
        flexDirection: 'column',
      },
      container: {
        alignItems: 'center',
        flexDirection: 'column',
        flex: 100,
        backgroundColor: '#00FF00',
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 25,
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Itim-Regular',
        textAlginVertical: 'center',
      },
    })

    /////////////////////////////////// Rectangle Buttons
    function RectangleButtons() {
      return (
        <View style={buttonsStyles.container}>
          <TouchableOpacity style={buttonsStyles.buttonContainer} onPress={() => navigation.navigate('SignUp')}>
            <Text style={buttonsStyles.text}>Sign Up</Text>
          </TouchableOpacity>

          <View style={{flex: 20}}/>

          <TouchableOpacity style={buttonsStyles.buttonContainer} onPress={() => navigation.navigate('Home')}>
            <Text style={buttonsStyles.text}>Continue as a Guest</Text>
          </TouchableOpacity>
        </View>
      )
      
    }

    const buttonsStyles = StyleSheet.create({
      container: {
        flex: 100,
        

      },
      buttonContainer: {
        width: 300,
        flex: 40,

        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontFamily: 'Itim-Regular',
        backgroundColor: '#726969',
        paddingLeft: 15,
        fontStyle: 'italic',
        fontSize: 25,

        justifyContent: 'center',
      },
      text: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Itim-Regular',
        fontSize: 25,

      }
    })


    /////////////////////////////////// Main return
    
    return (
      <View style={styles.container}>
        <View style={{flex: 135}}/>
        <TitleText/>

        <View style={{flex: 25}}/>
        <View style={logoStyles.imageContainer}>
          <ImageViewer theme="panda-image" imageSource={pandaImage}/>
        </View>

        <View style={{flex: 25}}/> 
        <View style={inputStyles.inputContainer}>
          <TextInput
              style={inputStyles.input}
              placeholder="Username..."
              value={username}
              onChangeText={setUsername}
          />

          <View style={{flex: 20}}/>

          <TextInput
            style={inputStyles.input}
            placeholder="Password..."
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={{flex: 20}}/>
        <SignInButton/>

        <View style={{flex: 25}}/>
        <RectangleButtons/>

        <View style={{flex: 60}}/>
        
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
  
