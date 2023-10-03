import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

import { COLORS } from '../../utils/tokens';
import IconButton from '../../components/buttons/IconButton';
import { useAppDispatch } from '../../store/store';
import { navigateAction } from '../../store/navigation/navigation.action';
import { NavigationScreens } from '../screens';

const Header = () => {
    const dispatch = useAppDispatch();

    const handleGoToAddRecipeScreen = () => {
        dispatch(navigateAction({
            screen: NavigationScreens.AddRecipe,
        }))
    }

    return (
        <View style={styles.navigationContainer}>
            <View style={styles.innerWrapper}>
                <View style={styles.titleContainer}>
                    <Ionicons name='fast-food-sharp' size={32} color={COLORS.tertiary} />
                    <Text style={styles.headerTitle}>Fooddicted!</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <IconButton showBackgroundColor={true} isRounded name='add-sharp' onPress={handleGoToAddRecipeScreen} size={24} type='Secondary' style={{ marginRight: 15 }} />
                </View>
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    navigationContainer: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        height: 75,
        alignItems: 'flex-end',
    },
    innerWrapper: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 18,
        color: COLORS.tertiary,
    },
})