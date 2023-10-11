import "react-native-gesture-handler";

import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'

import { HomeScreenProps } from '../../hoc/withHome'

import Hero from '../../components/Hero/Hero'
import IconButton from '../../components/buttons/IconButton'
import SearchBar from '../../components/form/SearchBar'

import { COLORS } from '../../utils/tokens'
import NativeCarousel from "../../components/carousel/Carousel";

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <TouchableWithoutFeedback onPress={props.loseFocusHandler} accessible={false}>
      <View style={styles.homeContainer}>
        <Hero>
          <View style={styles.contentContainer}>
            <View style={styles.profile}>
                <IconButton showBackgroundColor type='Secondary' isRounded onPress={props.onGoToProfile} name='people-outline' size={24} />
            </View>
            <View>
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
        </Hero>
        <View
          style={{
            alignItems: "center",
            flex: 1
          }}
        >
        <View style={{width: '100%', backgroundColor: COLORS.tertiary_light, marginVertical: 5}}>
          <Text >SECTION - BEST RATING</Text>
        </View>
        <View style={{width: '100%', backgroundColor: COLORS.tertiary_light, marginVertical: 5}}>
          <Text >SECTION - LATEST RECIPES</Text>
        </View>
          <NativeCarousel />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  contentContainer: {
    position: 'relative',
    height: '100%',
    width: '100%',
    padding: 10,
    justifyContent: 'flex-end',
    gap: 10
  },
  searchBarContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  profile: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  heading: {
    color: COLORS.navbar_light,
    fontSize: 20,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: {height: 2, width: 2},
    textShadowRadius: 2
},
})