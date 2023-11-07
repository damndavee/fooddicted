import "react-native-gesture-handler";

import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, ScrollView, SafeAreaView, ImageBackground, StatusBar } from 'react-native'
import {FlatList, View} from "native-base";

import { HomeScreenProps } from '../../hoc/withHome'

import Hero from '../../components/hero/Hero'
import IconButton from '../../components/buttons/IconButton'
import SearchBar from '../../components/form/SearchBar'

import { COLORS } from '../../utils/tokens'
import NativeCarousel from "../../components/carousel/Carousel";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import ListItem from "../../components/common/ListItem";

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <TouchableWithoutFeedback onPress={props.loseFocusHandler} accessible={false} style={styles.screenContainer}>
      <ScrollView>
        <View style={styles.homeContainer}>
          <Hero>
            <View style={styles.contentContainer}>
              <View style={styles.profileCTAContainer}>
                <View style={styles.profile}>
                    <IconButton showBackgroundColor type='Secondary' isRounded onPress={props.onGoToProfile} name='people-outline' size={24} />
                </View>
              </View>
              <View>
                <View style={{marginVertical: 10}}>
                    <Text style={styles.heading}>Tell us, |userName|</Text>
                    <Text style={styles.heading}>what would You like to cook?</Text>
                </View>
                <View style={styles.searchBarContainer}>
                    <SearchBar 
                      placeholder='Search...' 
                      width='200' 
                      isSearchHistoryShown={props.isHistoryVisible} 
                      onPressSearchButton={props.onGoToSearch} 
                      onFocus={props.focusHandler}
                      onChangeQuery={props.onChangeHandler}
                      searchHistory={props.searchHistory}
                      isClearButtonShown={props.isClearButtonVisible}
                      onClearQuery={props.clearInputHandler}
                      value={props.searchValue}
                    />
                </View>
              </View>
            </View>
          </Hero>

          <Section type="Tertiary" label="Daily inspirations" size="Big" />
          <View style={styles.carouselContainer}>
            <NativeCarousel data={props.carouselData} />
          </View>

          <ListItem sectionTitle="Most Recent">
            <FlatList data={props.mostRecentRecipes} horizontal renderItem={({ item }) => <Card item={item} />} />
          </ListItem>
          <View style={{height: 250, width: '100%'}}>
            <Text>ARTICLE</Text>
          </View>
          <ListItem sectionTitle="Popular creators">
            
          </ListItem>
          <Section type="Tertiary" label="Best Rating" size="Big" />
          <View>
            <FlatList data={props.bestRatedRecipes} horizontal renderItem={({ item }) => <Card item={item} />} />
          </View>
          <View style={{height: 250, width: '100%'}}>
            <Text>ARTICLE</Text>
          </View>
          <ListItem sectionTitle="Top categories">
            
          </ListItem>
          <Section type="Tertiary" label="Recently Viewed" size="Big" />
          <View>
            <FlatList data={props.bestRatedRecipes} horizontal renderItem={({ item }) => <Card item={item} />} />
          </View>
          <View style={{height: 250, width: '100%'}}>
            <Text>ALL RECIPES</Text>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.secondaryLight
  },
  contentContainer: {
    height: '100%',
    width: '100%',
    padding: 10,
    justifyContent: 'space-between',
    gap: 10
  },
  profileCTAContainer: {
    margin: 10
  },
  searchBarContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  carouselContainer: {
    backgroundColor: COLORS.secondaryLight,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profile: {
   width: '100%',
   alignItems: 'flex-end'
  },
  heading: {
    color: COLORS.secondaryLight,
    fontSize: 20,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: {height: 2, width: 2},
    textShadowRadius: 2
  },
})