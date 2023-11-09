import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';

import { DetailedRecipeType } from '../../../store/recipes/recipes.type';
import Overlay from '../../common/Overlay';
import IconButton from '../../buttons/IconButton';
import Badge from '../../common/Badge';
import StarRating from '../../common/StarRating';
import Button from '../../buttons/Button';
import { ReusableComponentColorThemeIndex, ReusableComponentType } from '../../../types/reusableComponents';
import { COLORS, SPACINGS } from '../../../utils/tokens';
import { COMPONENT_COLOR_THEME } from '../../../utils/consts';

export type CardProps = {
  item: DetailedRecipeType;
  type: keyof typeof ReusableComponentType;
}

const Card = (props: CardProps) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const ingredientsCount = props.item.extendedIngredients.length;

  return (
    <View style={[styles.cardContainer, { width: width * 0.7, height: height * 0.45, backgroundColor: COMPONENT_COLOR_THEME[props.type][ReusableComponentColorThemeIndex.Active] }]}>
      <View style={styles.imageContainer}>
        <ImageBackground style={styles.image} source={{ uri: props.item.image }}>
          <Overlay rate={0.075} />
          <View style={styles.headerContainer}>
            <Badge type='Tertiary' label={props.item.dishTypes[0]} />
            <IconButton name='bookmark-outline' onPress={() => {}} size="Big" type='Tertiary' isRounded showBackgroundColor />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.infoContainer}>
        <View>
          <StarRating rating={props.item.rating} />
          <Text style={styles.title}>{props.item.title}</Text>
        </View>
        <Button 
          fullWidth
          label={`Add ${ingredientsCount} ingredients`} 
          onPress={() => {}}
          size='Small' 
          type='Secondary' 
          variant='Filled'
        />
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
      borderRadius: 15,
      overflow: 'hidden',
      margin: SPACINGS.medium,
    },
    imageContainer: {
      height: '60%',
      width: '100%',
    },
    headerContainer: {
      width: '100%',
      paddingVertical: SPACINGS.small,
      paddingHorizontal: SPACINGS.small,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    infoContainer: {
      flex: 1,
      padding: SPACINGS.medium,
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