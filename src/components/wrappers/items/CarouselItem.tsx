import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import IconButton from '../../buttons/IconButton';
import { COLORS } from '../../../utils/tokens';
import { DetailedRecipeType } from '../../../store/recipes/recipes.type';
import StarRating from '../../common/StarRating';
import Button from '../../buttons/Button';
import Badge from '../../common/Badge';

type CarouselItemProps = {
  item: DetailedRecipeType;
  currentIndex: number;
};

const CarouselItem = (props: CarouselItemProps) => {
  const ingredientsCount = props.item.extendedIngredients.length;

  return (
    <View style={styles.carouselItemContainer}>
      <View style={styles.imageContainer}>
        <ImageBackground source={{ uri: props.item.image }} style={styles.image}>
          <View style={styles.innerContainer}>
            <View style={styles.bookmarkContainer}>
              <IconButton onPress={() => {}} size="Large" type='Tertiary' showBackgroundColor isRounded name='bookmark-outline' />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.ratingContainer}>
          <StarRating rating={props.item.rating} />
          <Badge label={`${props.item.readyInMinutes} mins`} type='Tertiary' />
          <Text style={{color: COLORS.primary, fontSize: 16}}>{props.item.servings} servings</Text>
        </View>
        <Text style={{color: COLORS.primary, fontWeight: 'bold', fontSize: 20}}>{props.item.title}</Text>
        <Button 
          fullWidth
          label={`Add ${ingredientsCount} ingredients`} 
          onPress={() => {}}
          size='Medium' 
          type='Primary' 
          variant='Filled' 
          leftIcon='cart-outline' 
        />
      </View>
    </View>
  )
}

export default CarouselItem;

const styles = StyleSheet.create({
    carouselItemContainer: {
      flex: 1,
      flexDirection: 'column',
      overflow: 'hidden',
    },
    imageContainer: {
      height: '60%',
      width: '100%',
    },
    innerContainer: {
      flex: 1,
    },
    bookmarkContainer: {
      width: '100%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      padding: 10,
    },
    informationContainer: {
      padding: 10,
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%',
    },
    ratingContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    image: {
      flex : 1,
      height: '100%',
      width: '100%'
    }
});