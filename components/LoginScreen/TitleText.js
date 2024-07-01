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

  export default TitleText;