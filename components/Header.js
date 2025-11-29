import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title = 'Мой профиль' }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: '#a40101ff',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffffff',
  },
});
