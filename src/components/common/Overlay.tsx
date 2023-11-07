import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type OverlayProps = {
    rate: number
}

const Overlay = (props: OverlayProps) => {
  return (
    <View style={[styles.overlay, { backgroundColor: `rgba(0,0,0, ${props.rate})` }]} />
  )
}

export default Overlay;

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
    }
})