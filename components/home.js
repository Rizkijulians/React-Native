import React from 'react';
import { Text, View, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Contact from './kontak';
import { useNavigation } from '@react-navigation/native';

const contactsData = [
  {
    id: '1',
    gambar: require('../rofi.jpeg'),
    judul: 'rofi darozat',
    telpon: '0765535531',
  },
  {
    id: '2',
    gambar: require('../gilang.jpeg'),
    judul: 'gilang mubharoq',
    telpon: '0765535531',
  },
  // Tambahkan data kontak lainnya sesuai kebutuhan
];

const Home = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('About', { selectedContact: item })}
      style={styles.contactContainer}
    >
      <Contact gambar={item.gambar} judul={item.judul} telpon={item.telpon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text>Welcome to Home Screen</Text>
      
      <FlatList
        data={contactsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />

      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About', { selectedContact: contactsData[0] })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  list: {
    marginTop: 20,
    width: '100%',
  },
  contactContainer: {
    marginBottom: 10,
  },
});

export default Home;
