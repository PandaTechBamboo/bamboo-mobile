import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import ImageViewer from './ImageViewer'

const MyButton = ({ style, theme, label, onPress }) => {
  // Define styles based on the theme prop
  const getButtonStyle = (themeStyle) => {
    switch (themeStyle) {
      case 'primary':
        return [styles.button, styles.primaryButton];
      case 'secondary':
        return [styles.button, styles.secondaryButton];
      case 'calendar':
        return [styles.calendar];
      default:
        return styles.button;
    }
  };

  if (theme == 'calendar-icon') {
    const calendarIcon = require('../assets/images/calendar-icon.png'); 
    return (
      <TouchableOpacity style = {[getButtonStyle('calendar'), style]} onPress={onPress}>
        <ImageViewer theme='calendar' imageSource = {calendarIcon}/>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity style={[getButtonStyle(theme), style]} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#007BFF',
  },
  primaryButton: {
    backgroundColor: '#007BFF',
  },
  secondaryButton: {
    backgroundColor: '#6C757D',
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
  },
  calendar: {
    height: 10,
  },
});

export default MyButton;