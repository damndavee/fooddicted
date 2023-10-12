import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { ReusableComponentSize, ReusableComponentType, ReusableComponentTypeStateIndex } from '../../types/reusableComponents';
import { COMPONENT_SIZE, COMPONENT_TYPE } from '../../utils/consts';

export type SectionProps = {
    label: string;
    type: keyof typeof ReusableComponentType;
    size: keyof typeof ReusableComponentSize;
};

const Section = (props: SectionProps) => {
  return (
    <View style={[styles.sectionContainer, {backgroundColor: COMPONENT_TYPE[props.type][ReusableComponentTypeStateIndex.Active]}]}>
      <Text style={{ 
        color: COMPONENT_TYPE[props.type][ReusableComponentTypeStateIndex.Color],
        fontSize: COMPONENT_SIZE[props.size],
        fontWeight: 'bold'
        }}>{props.label}</Text>
    </View>
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