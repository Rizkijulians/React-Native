import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';

const About = ({ navigation, route }) => {
  const { selectedContact } = route.params;

  return (
    <View style={styles.container}>
      <Text>Welcome to About Screen</Text>
      <Image source={selectedContact.gambar} style={styles.image} />
      <Text>Contact Details:</Text>
      <Text>{selectedContact.judul}</Text>
      <Text>{selectedContact.telpon}</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default About;
