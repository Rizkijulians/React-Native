import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Contact = ({ gambar, judul, telpon }) => {
  return (
    <View style={styles.container}>
      <Image source={gambar} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{judul}</Text>
        <Text style={styles.phone}>{telpon}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    color: '#555',
  },
});

export default Contact;
