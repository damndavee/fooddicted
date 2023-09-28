import { StyleSheet, View, Text } from 'react-native';
import { Menu, HamburgerIcon, Button } from 'native-base';

import { COLORS } from '../../utils/tokens';
import IconButton from '../../components/Buttons/IconButton';
import useMenu from '../../hooks/useMenu';

const HeaderMenu = () => {

    const { handleGoToAddRecipeScreen, handleGoToSearchRecipesScreen, handleLogout } = useMenu();

    return (
        <View style={styles.hamburgerContainer}>
            <Menu p={0} w="200" shouldOverlapWithTrigger={false} placement='bottom right' trigger={triggerProps => {
                return (
                    <Button style={styles.button} variant="ghost" {...triggerProps}>
                        <HamburgerIcon color={COLORS.tertiary} size={7} />
                    </Button>
                )
            }}>
                <Menu.Item onPress={handleGoToAddRecipeScreen} style={styles.borderBottom} >
                    <IconButton color={COLORS.tertiary} name='add-circle-outline' size={24} />
                    <Text style={styles.text}>Add Recipe</Text>
                </Menu.Item>
                <Menu.Item onPress={handleGoToSearchRecipesScreen} style={styles.borderBottom} >
                    <IconButton color={COLORS.tertiary} name='search-circle-outline' size={24} />
                    <Text style={styles.text}>Search Recipe</Text>
                </Menu.Item>
                <Menu.Item onPress={handleLogout}>
                    <IconButton color={COLORS.tertiary} name='exit-outline' size={24} />
                    <Text style={styles.text}>Logout</Text>
                </Menu.Item>
            </Menu>
        </View>
    )
}

export default HeaderMenu

const styles = StyleSheet.create({
    hamburgerContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'transparent',
    },
    borderBottom: {
        borderBottomColor: COLORS.tertiary_light, 
        borderBottomWidth: 0.3
    },
    text: {
        color: COLORS.tertiary
    }
})