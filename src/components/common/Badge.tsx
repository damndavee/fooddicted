import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { ReusableComponentType, ReusableComponentColorThemeIndex } from '../../types/reusableComponents';
import { COMPONENT_COLOR_THEME } from '../../utils/consts';
import { capitalizeTitle } from '../../utils/functions';

export type BadgeProps = {
    type: keyof typeof ReusableComponentType;
    label: string;
}

const Badge = (props: BadgeProps) => {
    const bgColor =  COMPONENT_COLOR_THEME[props.type][ReusableComponentColorThemeIndex.Active];
    const textColor = COMPONENT_COLOR_THEME[props.type][ReusableComponentColorThemeIndex.Color];
  
    return (
        <View style={[styles.badgeContainer, { backgroundColor: bgColor }]}>
            <Text style={{ color: textColor }}>{capitalizeTitle(props.label)}</Text>
        </View>
    )
}

export default Badge

const styles = StyleSheet.create({
    badgeContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
    }
})