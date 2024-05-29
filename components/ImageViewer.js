import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ imageSource, selectedImage }) {
  const theImage = selectedImage ? {
    uri: selectedImage} : imageSource;

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
});
