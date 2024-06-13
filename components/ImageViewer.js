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
    width: 200,
    height: 240,
    borderRadius: 18,
  },
  calendar: {
    height: 35,
    width: 35,
    marginRight: 50,
    marginTop: -15,
  }

});
