import MyButton from '../components/MyButton';
import ImageViewer from '../components/ImageViewer';

import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import React, { useState } from 'react';

export default function LoginScreen({navigation}) {

  var gapOne = 100;
  var gapTwo = 25;
  var gapThree = 25;
  var gapFour = 20;
  var gapFive = 20;
  var gapSix = 20;
  var gapSeven = 20;
  var gapEight = 60;

  const textFontSize = 20;

    const [fontsLoaded] = useFonts({
        'IrishGrover-Regular': require('../assets/fonts/IrishGrover-Regular.ttf'),
        'Itim-Regular' : require('../assets/fonts/Itim-Regular.ttf'),
        'Besley-Regular' : require('../assets/fonts/Besley-Regular.ttf'),
        'Besley-Italic' : require('../assets/fonts/Besley-Italic.ttf')
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
        fontSize: textFontSize,
      },
      input: {
          width: 300,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 5,
          fontFamily: 'Besley-Italic',
          
          color: '#FFFFFF',
          backgroundColor: '#D9D9D9',
          paddingLeft: 15,
          fontStyle: 'italic',
          fontSize: textFontSize,
          flex: 40,
      },
    })

    /////////////////////////////////// Sign In Button
    function SignInButton() {
      return (
        <View style={signInStyles.container}>
          <TouchableOpacity style={signInStyles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={signInStyles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>)
    }

    const signInStyles = StyleSheet.create({
      button: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        aspectRatio: 1,
        borderRadius: 100,
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: '#A3A3A3',
        backgroundColor: '#726969',
        flexDirection: 'column',
      },
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 100,
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: textFontSize,
        textAlign: 'center',
        fontFamily: 'Itim-Regular',
      },
    })

    /////////////////////////////////// Rectangle Buttons
    function RectangleButtons() {
      return (
        <View style={buttonsStyles.container}>
          <TouchableOpacity style={buttonsStyles.buttonContainer} onPress={() => navigation.navigate('SignUp')}>
            <Text style={buttonsStyles.text}>Sign Up</Text>
          </TouchableOpacity>

          <View style={{flex: gapSeven}}/>

          <TouchableOpacity style={buttonsStyles.buttonContainer} onPress={() => navigation.navigate('Home')}>
            <Text style={buttonsStyles.text}>Guest Login</Text>
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
        borderRadius: 50,
        paddingHorizontal: 10,
        fontFamily: 'Itim-Regular',
        backgroundColor: '#726969',
        paddingLeft: 15,
        fontStyle: 'italic',

        justifyContent: 'center',
      },
      text: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Itim-Regular',
        fontSize: textFontSize,

      }
    })


    /////////////////////////////////// Main return
    
    return (
      <View style={styles.container}>
        <View style={{flex: gapOne}}/>
        <TitleText/>

        <View style={{flex: gapTwo}}/>
        <View style={logoStyles.imageContainer}>
          <ImageViewer theme="panda-image" imageSource={pandaImage}/>
        </View>

        <View style={{flex: gapThree}}/> 
        <View style={inputStyles.inputContainer}>
          <TextInput
              style={inputStyles.input}
              placeholder="Username..."
              fontSize={textFontSize}
              placeholderTextColor="#FFFFFF"
              value={username}
              onChangeText={setUsername}
          />

          <View style={{flex: gapFour}}/>

          <TextInput
            style={inputStyles.input}
            placeholder="Password..."
            fontSize={textFontSize}
            placeholderTextColor="#FFFFFF"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={{flex: gapFive}}/>
        <SignInButton/>

        <View style={{flex: gapSix}}/>
        <RectangleButtons/>

        <View style={{flex: gapEight}}/>
        
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
  
