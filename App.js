import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Header from './components/Header';
import UserCard from './components/UserCard';
import Footer from './components/Footer';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <Header title="Ниже красавчик" />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <UserCard
            name="Дутов Даниил"
            title="UI/UX designer"
            bio="Работаю в Figma."
          />
          <Footer text="РТУ МИРЭА (лучший уник), 2025" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f3fb' 
  },
  scrollContainer: { 
    flexGrow: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 20 
  },
});
