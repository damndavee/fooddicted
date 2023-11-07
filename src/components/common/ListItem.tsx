import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import Section from './Section';
import { COLORS } from '../../utils/tokens';
import { Button } from 'native-base';

export type ListItemProps = {
    sectionTitle: string;
}

const ListItem = (props: PropsWithChildren<ListItemProps>) => {
  return (
    <View style={styles.listItemContainer}>
        <View style={styles.sectionContainer}>
            <Text style={styles.title}>{props.sectionTitle}</Text>
            <Button variant="solid" borderRadius={20} style={{backgroundColor: COLORS.listItem_light}}>See all</Button>
        </View>
        <ScrollView style={{flex: 1}}>
            {props.children}
        </ScrollView>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
    listItemContainer: {
        width: '100%',
        padding: 10,
    },
    sectionContainer: {
        height: 50,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: COLORS.text,
        fontSize: 18,
        fontWeight: 'bold'
    }
})