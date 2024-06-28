import MyButton from '../components/MyButton';
import ImageViewer from '../components/ImageViewer';

import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import LoginScreenFlex from '../components/FlexItems';

import SignInButton from '../components/LoginScreen/SignInButton';

import React, { useState } from 'react';

export default function LoginScreen({navigation}) {

  const flexItems = LoginScreenFlex;
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
        flex: flexItems.titleFlex,
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
        flex: flexItems.imageFlex,
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
        flex: flexItems.inputContainerFlex,
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
          flex: flexItems.inputFlex,
      },
    })

    

    /////////////////////////////////// Rectangle Buttons
    function RectangleButtons() {
      return (
        <View style={buttonsStyles.container}>
          <TouchableOpacity style={buttonsStyles.buttonContainer} onPress={() => navigation.navigate('SignUp')}>
            <Text style={buttonsStyles.text}>Sign Up</Text>
          </TouchableOpacity>

          <View style={{flex: flexItems.gapSeven}}/>

          <TouchableOpacity style={buttonsStyles.buttonContainer} onPress={() => navigation.navigate('Home')}>
            <Text style={buttonsStyles.text}>Guest Login</Text>
          </TouchableOpacity>
        </View>
      )
    }

    const buttonsStyles = StyleSheet.create({
      container: {
        flex: flexItems.buttonsContainerFlex,
      },
      buttonContainer: {
        width: 300,
        flex: flexItems.buttonFlex,

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
        <View style={{flex: flexItems.gapOne}}/>
        <TitleText/>

        <View style={{flex: flexItems.gapTwo}}/>
        <View style={logoStyles.imageContainer}>
          <ImageViewer theme="panda-image" imageSource={pandaImage}/>
        </View>

        <View style={{flex: flexItems.gapThree}}/> 
        <View style={inputStyles.inputContainer}>
          <TextInput
              style={inputStyles.input}
              placeholder="Username..."
              fontSize={textFontSize}
              placeholderTextColor="#FFFFFF"
              value={username}
              onChangeText={setUsername}
          />

          <View style={{flex: flexItems.gapFour}}/>

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

        <View style={{flex: flexItems.gapFive}}/>
        <SignInButton flexItems={flexItems} textFontSize={textFontSize}/>

        <View style={{flex: flexItems.gapSix}}/>
        <RectangleButtons/>

        <View style={{flex: flexItems.gapEight}}/>
        
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
  }
);
  
