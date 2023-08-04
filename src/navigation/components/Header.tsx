import { StyleSheet, Text, View } from 'react-native';
import { IconButton as PaperIconButton } from "react-native-paper";
import { Button, HamburgerIcon, Menu } from 'native-base';

import { COLORS } from '../../utils/tokens';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  return (
    <View style={styles.navigationContainer}>
        <View style={styles.innerWrapper}>
            <View style={styles.titleContainer}>
                <PaperIconButton style={{margin: 0, padding: 0}} size={32} iconColor={COLORS.tertiary} icon="food" />
                <Text style={styles.headerTitle}>Fooddicted!</Text>
            </View>
            <HeaderMenu />
        </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    navigationContainer: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        alignItems: "flex-end", 
        justifyContent: "center",
        height: 85,
    },
    innerWrapper: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
    },
    titleContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    hamburgerContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 18,
        color: COLORS.tertiary,
    },
    button: {
        backgroundColor: COLORS.tertiary,
    }
})