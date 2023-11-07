import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { ReusableComponentSize, ReusableComponentType, ReusableComponentTypeStateIndex } from '../../types/reusableComponents';
import { COMPONENT_SIZE, COMPONENT_TYPE } from '../../utils/consts';
import { COLORS } from '../../utils/tokens';

export type SectionProps = {
    label: string;
    type: keyof typeof ReusableComponentType;
    size: keyof typeof ReusableComponentSize;
};

const Section = (props: SectionProps) => {
  return (
    <LinearGradient locations={[0.4, 0.9]} start={{x: 0, y: 0.4}} end={{x: 1, y: 1}} colors={[COMPONENT_TYPE[props.type][ReusableComponentTypeStateIndex.Active], COLORS.secondaryLight]} style={styles.sectionContainer} >
    {/* <View style={[styles.sectionContainer, {backgroundColor: COMPONENT_TYPE[props.type][ReusableComponentTypeStateIndex.Active]}]}> */}
      <Text style={{ 
        color: COMPONENT_TYPE[props.type][ReusableComponentTypeStateIndex.Color],
        fontSize: COMPONENT_SIZE[props.size],
        fontWeight: 'bold'
        }}>{props.label}</Text>
    </LinearGradient>
  )
}

export default Section;

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    overflow: 'hidden',
  }
});