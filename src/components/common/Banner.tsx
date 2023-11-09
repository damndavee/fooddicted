import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';

import Overlay from './Overlay';
import Button from '../buttons/Button';
import { COLORS, FONT_SIZES, SPACINGS } from '../../utils/tokens';

export type BannerProps = {
    title: string;
    subtitle: string;
    buttonTitle: string;
    buttonAction: () => void;
}

const Banner = (props: BannerProps) => {
    const height = Dimensions.get('window').height;

    return (
        <View style={[styles.bannerContainer, { height: height * 0.40 }]}>
            <ImageBackground source={require('../../../assets/all-recipes.jpg')} style={styles.imgBackground} >
                <Overlay rate={0.35} />
                <View style={styles.contentWrapper}>
                    <Text style={[styles.text, { fontSize: FONT_SIZES.big, fontWeight: 'bold' }]}>{props.title}</Text>
                    <Text style={[styles.text]}>{props.subtitle}</Text>
                    <Button fullWidth={false} label={props.buttonTitle} onPress={props.buttonAction} size='Medium' type='Secondary' variant='Filled' />
                </View>
            </ImageBackground>
        </View>
    )
};

export default Banner;

const styles = StyleSheet.create({
    bannerContainer: {},
    imgContainer: {},
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center'
    },
    contentWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACINGS.big,
        width: '70%',
        height: '100%',
        position: 'absolute',
        zIndex: 2000,
    },
    text: {
        textAlign: 'center',
        color: "#fff",
        fontSize: FONT_SIZES.medium,
        textShadowColor: '#000',
        textShadowOffset: {height: 2, width: 2},
        textShadowRadius: 2,
        zIndex: 2000,
    }
});