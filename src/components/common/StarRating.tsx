import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons"

import { StyleSheet, Text, View } from 'react-native';

export type StarRatingProps = {
    rating: string;
}

// x - full
// y - half
// z - empty

const StarRating = (props: StarRatingProps) => {
    const [stars, half] = props.rating.split(".");

    const emptyStars = Array.from('z'.repeat(5 - Number(stars)));

    const fullStars = Array.from('x'.repeat(Number(stars)));
    const emptyOrHalfStar = half === '5' ? 'y' : 'z';
   
    const starsIcons = [...fullStars, emptyOrHalfStar, ...emptyStars].slice(0, 5);

    const renderStars = () => {

        return starsIcons.map((star, index) => {

            let starShape: 'sharp' | 'half-sharp' | 'outline' = 'sharp';

            if(star === 'y') {
                starShape = 'half-sharp';
            }

            if(star === 'z') {
                starShape = 'outline';
            }

            return <Ionicons size={18} name={`star-${starShape}`} color="gold" />;
        });
    }

    return (
        <View style={styles.starContainer}>
            {renderStars()}
        </View>
    )
}

export default StarRating;

const styles = StyleSheet.create({
    starContainer: {
        flexDirection: 'row'
      },
});