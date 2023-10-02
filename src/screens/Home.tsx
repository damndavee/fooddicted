import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Hero from '../components/Hero/Hero'
import { HomeScreenProps } from '../hoc/withHome'

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <View style={styles.homeContainer}>
      <Hero isHistoryOpen={props.isHistoryVisible} onSearch={props.onGoToSearch} onGoToProfile={props.onGoToProfile} />
      <Text >HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  }
})