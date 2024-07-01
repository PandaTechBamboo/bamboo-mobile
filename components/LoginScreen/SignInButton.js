import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';


function SignInButton(flexItems, textFontSize) {
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
          flex: flexItems.signInFlex,
        },
        buttonText: {
          color: '#FFFFFF',
          fontSize: textFontSize,
          textAlign: 'center',
          fontFamily: 'Itim-Regular',
        },
      })

    return (
      <View style={signInStyles.container}>
        <TouchableOpacity style={signInStyles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={signInStyles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>)
  }

  

  export default SignInButton;