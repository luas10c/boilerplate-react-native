import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'

export function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1d1b1b" animated />
      <Text style={styles.heading}>Hello, World!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1d1b1b'
  },
  heading: {
    fontFamily: '"Rotobo", sans-serif',
    textAlign: 'center',
    fontSize: 48,
    fontWeight: 700,
    color: '#8bd364'
  }
})
