import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ theme, imageSource, selectedImage }) {
  const theImage = selectedImage ? {
    uri: selectedImage} : imageSource;

  if (theme == "panda-image") {
    return <Image source={theImage} style={styles.pandaImage}/>
  }
  if (theme == 'calendar') {
    return <Image source = {theImage} style={styles.calendar}/>
  }
  if (theme == 'searchIcon') {
    return <Image source={theImage} style={styles.searchIcon}/>
  }
  return (
    <Image source={theImage} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  pandaImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  image: {
    width: 160,
    height: 190,
    borderRadius: 18,
  },
  calendar: {
    height: 40,
    width: 36,
  },
  searchIcon: {
    objectFit: 'contain',
    height: 35,
    width: 35,
    marginLeft: 15,
  }

});
