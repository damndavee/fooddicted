import React, { ReactElement } from 'react'
import { StyleSheet, View, ImageBackground,  } from 'react-native'

type HeroProps = {
    children: ReactElement;
}

const Hero = (props: HeroProps) => {
  return (
    <View style={styles.heroContainer}>
        <ImageBackground source={require('../../../assets/hero-img.jpg')} style={styles.imgBackground} resizeMode='cover'>
                {props.children}
        </ImageBackground>
    </View>
  )
};

export default Hero

const styles = StyleSheet.create({
    heroContainer: {
        height: '50%',
        zIndex: 1000,
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
})