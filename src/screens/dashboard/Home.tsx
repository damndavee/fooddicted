import "react-native-gesture-handler";

import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, ScrollView, SafeAreaView, ImageBackground, StatusBar } from 'react-native'
import {FlatList, View} from "native-base";

import { HomeScreenProps } from '../../hoc/withHome'

import Hero from '../../components/Hero/Hero'
import IconButton from '../../components/buttons/IconButton'
import SearchBar from '../../components/form/SearchBar'

import { COLORS } from '../../utils/tokens'
import NativeCarousel from "../../components/wrappers/containers/Carousel";
import Card from "../../components/wrappers/items/Card";
import List from "../../components/wrappers/containers/List";
import Banner from "../../components/common/Banner";

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <TouchableWithoutFeedback onPress={props.loseFocusHandler} accessible={false} style={styles.screenContainer}>
      <ScrollView>
        <View style={styles.homeContainer}>
          <Hero>
            <View style={styles.contentContainer}>
              <View style={styles.profileCTAContainer}>
                <View style={styles.profile}>
                    <IconButton showBackgroundColor type='Secondary' isRounded onPress={props.onGoToProfile} name='people-outline' size="Big" />
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

          <List 
            type="Tertiary" 
            sectionTitle="Daily inspirations" 
            spacing="Small" 
          >
            <View style={styles.carouselContainer}>
              <NativeCarousel data={props.carouselData} />
            </View>
          </List>
          
          <List 
            sectionTitle="Most Recent" 
            onShowAll={() => {}} 
            showAllButton 
            spacing="Small" 
            type="Tertiary"
          >
            <FlatList data={props.mostRecentRecipes} horizontal renderItem={({ item }) => <Card item={item} type="Tertiary" />} />
          </List>

          {/* <View style={{height: 250, width: '100%'}}>
            <Text>ARTICLE</Text>
          </View> */}

          {/* <List sectionTitle="Popular creators">
            
          </List> */}

          <List 
            sectionTitle="Best Rating" 
            onShowAll={() => {}} 
            showAllButton 
            spacing="Small" 
            type="Tertiary"
          >
            <FlatList data={props.bestRatedRecipes} horizontal renderItem={({ item }) => <Card item={item} type="Tertiary" />} />
          </List>

          {/* <View style={{height: 250, width: '100%'}}>
            <Text>ARTICLE</Text>
          </View> */}

          {/* <List sectionTitle="Top categories">
            
          </List> */}

          <List 
            sectionTitle="Recently Viewed" 
            onShowAll={() => {}} 
            showAllButton 
            spacing="Small" 
            type="Tertiary"
          >
            <Text>HERE WILL BE RECENTLY VIEWD RECIPES</Text>
          </List>

          <Banner title="All Recipes" subtitle="Get to know the recipes that will satisfy every palate, tested by the greatest culinary specialists." buttonTitle="See Recipes" buttonAction={() => {}} />
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