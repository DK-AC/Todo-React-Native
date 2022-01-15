import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3949ab',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
