import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

import IconButton from '../buttons/IconButton';
import { Button } from 'native-base';
import { COLORS } from '../../utils/tokens';
import Hero from '../Hero/Hero';
import { DetailedRecipeType } from '../../store/recipes/recipes.type';
import StarRating from '../common/StarRating';

type CarouselItemProps = {
  variant: 'big' | 'medium' | 'small';
  background: any;
  item: DetailedRecipeType;
  currentIndex: number;
};

const CarouselItem = (props: CarouselItemProps) => {
  return (
    <View style={[styles.carouselItemContainer, {backgroundColor: props.background}]}>
      <View style={styles.imageContainer}>
        <ImageBackground source={{ uri: props.item.image }} style={styles.image} resizeMode='cover'>
          <View style={styles.bookmarkContainer}>
            <IconButton name='bookmark-outline' onPress={() => {}} size={20} type='Base' isRounded showBackgroundColor />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.informationContainer}>
        <StarRating rating={props.item.rating} />
        <Text style={{color: 'white', fontSize: 16}}>{props.item.title}</Text>
        <Button padding={1} borderColor="white" rounded={15} variant="outline" _text={{color: 'white'}} leftIcon={<Ionicons name='cart-outline' size={20} color="white" />}>10</Button>
      </View>
    </View>
  )
}

export default CarouselItem;

const styles = StyleSheet.create({
    carouselItemContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    imageContainer: {
      height: '100%',
      width: '70%',
      backgroundColor: 'red',
    },
    informationContainer: {
      flex: 1,
      width: '100%',
      padding: 10
    },
    buttonContainer: {
      marginHorizontal: 15
    },
    bookmarkContainer: {
      height: 50,
      justifyContent: 'center',
      paddingHorizontal: 10,
      width: '100%',
      alignItems: 'flex-start',
    },
    image: {
      flex : 1,
      height: '100%',
      width: '100%'
    }
});