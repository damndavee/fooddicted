import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

import IconButton from '../buttons/IconButton';
import { Button } from 'native-base';
import { COLORS } from '../../utils/tokens';

type CarouselItemProps = {
  variant: 'big' | 'medium' | 'small';
  background: any;
  text: any
  item: any;
  currentIndex: number;
};

const CarouselItem = (props: CarouselItemProps) => {
  return (
    <View style={[styles.carouselItemContainer, {backgroundColor: props.background}]}>
      <View style={styles.imageContainer}>
        <View style={styles.bookmarkContainer}>
          <IconButton name='bookmark-outline' onPress={() => {}} size={20} type='Base' isRounded showBackgroundColor />
        </View>
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.starContainer}>
            {[2,2,2,1,0,0].map(star => <Ionicons size={12} name={`star-${star === 2 ? 'sharp' : star === 1 ? 'half-sharp' : 'outline'}`} color="white" />)}
        </View>
        <Text style={{color: 'white', fontSize: 16}}>Some Tasty dish</Text>
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
      backgroundColor: 'olive',
    },
    informationContainer: {
      flex: 1,
      width: '100%',
      padding: 10
    },
    starContainer: {
      flexDirection: 'row'
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
    }
});