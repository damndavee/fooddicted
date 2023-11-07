import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';
import { DetailedRecipeType } from '../../store/recipes/recipes.type';
import Overlay from './Overlay';
import { COLORS } from '../../utils/tokens';
import IconButton from '../buttons/IconButton';
import Badge from './Badge';
import StarRating from './StarRating';
import { Ionicons } from "@expo/vector-icons";
import { Button } from 'native-base';

export type CardProps = {
  item: DetailedRecipeType;
}

const Card = (props: CardProps) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <View style={[styles.cardContainer, { width: width * 0.7, height: height / 2}]}>
      <View style={styles.imageContainer}>
        <ImageBackground style={styles.image} source={{ uri: props.item.image }}>
          <Overlay rate={0.075} />
          <View style={styles.headerContainer}>
            <Badge type='Tertiary' label={props.item.dishTypes[0]} />
            <IconButton name='bookmark-outline' onPress={() => {}} size={24} type='Tertiary' isRounded showBackgroundColor />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.infoContainer}>
        <StarRating rating={props.item.rating} />
        <Text style={styles.title}>{props.item.title}</Text>
      </View>
      <View style={styles.ctaContainer}>
        <Text style={styles.title}>{props.item.extendedIngredients.length} ingredients</Text>
        <Button paddingX={1} borderColor="white" rounded={15} variant="outline" _text={{color: 'white'}} leftIcon={<Ionicons name='cart-outline' size={14} color="white" />}> Add</Button>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: COLORS.tertiaryLight,
      borderRadius: 15,
      overflow: 'hidden',
      margin: 10,
    },
    imageContainer: {
      height: '70%',
      width: '100%',
    },
    headerContainer: {
      width: '100%',
      paddingVertical: 10,
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    infoContainer: {
      padding: 10
    },
    ctaContainer: {
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    image: {
      flex: 1,
      height: '100%',
      width: '100%',
    },
    title: {
      fontSize: 14,
      color: COLORS.secondaryLight,
      fontWeight: 'bold'
    }
})