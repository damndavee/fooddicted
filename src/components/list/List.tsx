import React, { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Button from '../buttons/Button';
import { FONT_SIZES, SPACINGS } from '../../utils/tokens';
import { ReusableComponentColorThemeIndex, ReusableComponentSize, ReusableComponentSizeIndex, ReusableComponentType } from '../../types/reusableComponents';
import { COMPONENT_COLOR_THEME, COMPONENT_SIZE } from '../../utils/consts';

type GenericListProps = {
    type: keyof typeof ReusableComponentType;
    sectionTitle: string;
    spacing?: keyof typeof ReusableComponentSize
};

type NoShowAllButtonType = { showAllButton?: never, onShowAll?: never };
type ShowAllButtonType = { showAllButton: true, onShowAll: () => void } | { showAllButton: false, onShowAll?: never }; 

export type ListProps = GenericListProps & NoShowAllButtonType | GenericListProps & ShowAllButtonType;

const List = (props: PropsWithChildren<ListProps>) => {
    const componentSpacing = props.spacing ? COMPONENT_SIZE[props.spacing][ReusableComponentSizeIndex.Spacing] : 0;
    const colorTheme = COMPONENT_COLOR_THEME[props.type];
    const paddingVertical = props.showAllButton ? SPACINGS.medium : SPACINGS.big;
  
    return (
        <View style={[styles.listContainer]}>
            <View style={[styles.sectionContainer, { paddingVertical }]}>
                <Text style={{
                    color: colorTheme[ReusableComponentColorThemeIndex.Active],
                    fontSize: FONT_SIZES.medium,
                    fontWeight: 'bold'
                }}>
                    {props.sectionTitle}
                </Text>
                {props.showAllButton && (
                    <Button 
                        fullWidth={false} 
                        label='See all' 
                        onPress={() => {}} 
                        size='Small' 
                        type={props.type} 
                        variant='Filled' 
                    />
                )}
            </View>
            <ScrollView style={{flex: 1, paddingHorizontal: componentSpacing }}>
                {props.children}
            </ScrollView>
        </View>
    )
}

export default List;

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
    },
    sectionContainer: {
        width: '100%',
        paddingHorizontal: SPACINGS.big,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})