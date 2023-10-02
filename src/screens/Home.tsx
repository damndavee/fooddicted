import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Hero from '../components/Hero/Hero'

const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <Hero />
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  }
})