import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../store/store';
import { signOut } from '../store/auth/auth.reducer';

import { NavigationScreens } from '../navigation/screens';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/stack/type';

const useMenu = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handleGoToAddRecipeScreen = () => navigation.navigate(NavigationScreens.AddRecipe);

    const handleGoToSearchRecipesScreen = () => navigation.navigate(NavigationScreens.SearchRecipes);

    const handleLogout = () => dispatch(signOut());

    return {
        handleGoToAddRecipeScreen,
        handleGoToSearchRecipesScreen,
        handleLogout
    }
}

export default useMenu;