import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Skills from './Skills';

export default function UserCard({
  avatar = require('../assets/man.jpg'),
  name = 'Дутов Даниил',
  title = 'UI/UX designer',
  bio = 'Работаю в Figma',
  skills = ['no JavaScript', ' no React', 'UI/UX - da', 'Team Lead 100%'],
  onSubscribe = () => {},
}) {
  return (
    <View style={styles.card}>
      <Image source={avatar} style={styles.avatar} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.bio}>{bio}</Text>
      </View>

      <Skills skills={skills} />

      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onSubscribe}>
        <Text style={styles.buttonText}>Подписаться</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '85%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    ...(Platform.OS === 'web' ? { boxShadow: '0px 2px 6px rgba(0,0,0,0.12)' } : {}),
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  textContainer: { alignItems: 'center', marginBottom: 12 },
  name: { fontSize: 22, fontWeight: '700', marginBottom: 4 },
  title: { fontSize: 16, color: '#636363', marginBottom: 8 },
  bio: { fontSize: 14, color: '#888', textAlign: 'center' },
  button: {
    backgroundColor: '#a40101ff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
