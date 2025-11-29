import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer({ text = 'МИРЭА, 2025' }) {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 18,
    paddingVertical: 12,
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: '#666',
  },
});
