// src/screens/ProductDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { productId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Detail Screen</Text>
      <Text style={styles.productId}>Product ID: {productId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productId: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default ProductDetailScreen;
