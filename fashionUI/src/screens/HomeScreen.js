// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const products = [
  { id: '1', name: 'Office Wear', price: '$120', image: require('../../assets/office_wear.jpg') },
  { id: '2', name: 'Black', price: '$120', image: require('../../assets/black.jpg') },
  { id: '3', name: 'Church Wear', price: '$120', image: require('../../assets/church_wear.jpg') },
  { id: '4', name: 'Lamerei', price: '$120', image: require('../../assets/lamerei.jpg') },
  { id: '5', name: '21WN', price: '$120', image: require('../../assets/21wn.jpg') },
  { id: '6', name: 'Lopo', price: '$120', image: require('../../assets/lopo.jpg') },
  { id: '7', name: 'Lane', price: '$120', image: require('../../assets/lane.jpg') },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderProduct = ({ item }) => (
    <Card containerStyle={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Button
        title="View Details"
        onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
      />
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OUR STORY</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
});

export default HomeScreen;
