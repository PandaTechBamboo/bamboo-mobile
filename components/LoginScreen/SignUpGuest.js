function SignUpGuest() {
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


  export default SignUpGuest;