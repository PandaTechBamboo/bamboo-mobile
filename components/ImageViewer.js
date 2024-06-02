import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ theme, imageSource, selectedImage }) {
  const theImage = selectedImage ? {
    uri: selectedImage} : imageSource;

  if (theme == 'calendar') {
    return <Image source = {theImage} style={styles.calendar}/>
  }
  return (
    <Image source={theImage} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 300,
    borderRadius: 18,
  },
  calendar: {
    height: 10,
    width: 10,
    marginRight: 50,
  }

});
