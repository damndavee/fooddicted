import { StyleSheet, Text, View, ImageBackground,  } from 'react-native'
import React, { useState } from 'react'
import IconButton from '../Buttons/IconButton'
import { COLORS } from '../../utils/tokens'
import SearchBar from '../form/SearchBar'
import { Button } from 'native-base'

type HeroProps = {
    isHistoryOpen: boolean;
    onSearch: () => void;
    onGoToProfile: () => void;
}

const Hero = (props: HeroProps) => {
  return (
    <View style={styles.heroContainer}>
        <ImageBackground source={require('../../../assets/hero-img.jpg')} style={styles.imgBackground} resizeMode='cover'>
            <View style={styles.contentContainer}>
                <View style={styles.profile}>
                    <IconButton showBackgroundColor type='Secondary' isRounded onPress={props.onGoToProfile} name='people-outline' size={24} />
                </View>
                <View>
                    <Text style={styles.heading}>Tell us, |userName|</Text>
                    <Text style={styles.heading}>what would You like to cook?</Text>
                </View>
                <View style={styles.searchBarContainer}>
                    <SearchBar text='Search...' width='200' showIcons isOpen={props.isHistoryOpen} onSearchPress={props.onSearch} />
                </View>
            </View>
        </ImageBackground>
    </View>
  )
}

export default Hero

const styles = StyleSheet.create({
    heroContainer: {
        height: '50%',
        zIndex: 1000,
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
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
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