import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import SignInButton from './SignInButton'



function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const textFontSize = 20;


    function checkLogin() {

    }
    
    return (
        <>
        
            <View style={inputStyles.inputContainer}>
            <TextInput
                style={inputStyles.input}
                placeholder="Username..."
                fontSize={textFontSize}
                placeholderTextColor="#FFFFFF"
                value={username}
            />

            <View style={{flex: flexItems.gapFour}}/>

            <TextInput
                style={inputStyles.input}
                placeholder="Password..."
                fontSize={textFontSize}
                placeholderTextColor="#FFFFFF"
                value={password}
                secureTextEntry
            />
            </View>

            <View style={{flex: flexItems.gapFive}}/>
            <SignInButton flexAmount={flexItems.signInFlex} textFontSize={textFontSize} onPress={setusername}/>
        </>
    );
    
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

export default SignIn;