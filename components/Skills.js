import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Skills({ skills = [] }) {
  return (
    <View style={styles.container}>
      {skills.map((s) => (
        <View key={s} style={styles.rectangle}>
          <Text style={styles.text}>{s}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 8,
  },
  rectangle: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#ff6161ff',
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 13,
    fontWeight: '500',
    color: '#ffffffff',
  },
});
