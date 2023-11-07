import { ComponentType, useState } from "react";
import { useRoute, RouteProp } from "@react-navigation/native";

import { NavigationScreens } from "../navigation/screens";
import { RootStackParamList } from "../navigation/stack/type";
import { useAppDispatch, useAppSelector } from "../store/store";
import { navigateAction } from "../store/navigation/navigation.action";
import useSearchBar from "../hooks/useSearchBar";
import { bestRatedRecipesSelector, carouselRecipesSelector, localStorageRecipesSelector, mostRecentRecipesSelector } from "../store/recipes/recipes.selector";
import { DetailedRecipeType } from "../store/recipes/recipes.type";
import { signOut } from "../store/auth/auth.reducer";


export type HomeScreenProps = {
   onGoToProfile: () => void;
   onGoToSearch: () => void;
   clearInputHandler: () => void;
   onChangeHandler: (t1: string) => void;
   focusHandler: () => void;
   loseFocusHandler: () => void;
   searchValue: string;
   isClearButtonVisible: boolean;
   isHistoryVisible: boolean;
   searchHistory: any[];
   carouselData: DetailedRecipeType[];
   bestRatedRecipes: DetailedRecipeType[];
   mostRecentRecipes: DetailedRecipeType[];
}

const withHomeScreen = (DumbComponent: ComponentType<HomeScreenProps>) => () => {
    const dispatch = useAppDispatch();
    const route = useRoute<RouteProp<RootStackParamList>>();

    const localStorageRecipes: DetailedRecipeType[] = useAppSelector(localStorageRecipesSelector);
    const carouselRecipes: DetailedRecipeType[] = useAppSelector(carouselRecipesSelector);
    const bestRatedRecipes: DetailedRecipeType[] = useAppSelector(bestRatedRecipesSelector);
    const mostRecentRecipes: DetailedRecipeType[] = useAppSelector(mostRecentRecipesSelector);

    const { focusHandler, isHistoryVisible, loseFocusHandler, onChangeHandler, clearInputHandler, 
        isClearButtonVisible, isSearchQueryValid, searchValue, searchHistoryItems } = useSearchBar();

    const handleGoToProfile = () => {
        dispatch(signOut());
        // dispatch(navigateAction({
        //     screen: NavigationScreens.Profile,
        // }))
    };

    const handleGoToSearch = () => {
        if(isSearchQueryValid) {
            dispatch(navigateAction({
                screen: NavigationScreens.SearchRecipes
            }));
            clearInputHandler();
        }
    };

    return (
        <DumbComponent
           onGoToProfile={handleGoToProfile}
           onGoToSearch={handleGoToSearch}
           searchHistory={searchHistoryItems}
           searchValue={searchValue}
           clearInputHandler={clearInputHandler}
           isClearButtonVisible={isClearButtonVisible}
           onChangeHandler={onChangeHandler}
           focusHandler={focusHandler}
           isHistoryVisible={isHistoryVisible}
           loseFocusHandler={loseFocusHandler}
           carouselData={carouselRecipes}
           bestRatedRecipes={bestRatedRecipes}
           mostRecentRecipes={mostRecentRecipes}
        />
    )
}

export default withHomeScreen;