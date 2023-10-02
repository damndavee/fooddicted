import { ComponentType, useState } from "react";
import { useRoute, RouteProp } from "@react-navigation/native";

import { NavigationScreens } from "../navigation/screens";
import { RootStackParamList } from "../navigation/stack/type";
import { useAppDispatch } from "../store/store";
import { navigateAction } from "../store/navigation/navigation.action";


export type HomeScreenProps = {
   onGoToProfile: () => void;
   onGoToSearch: () => void;
   onToggleHistory: () => void;
   isHistoryVisible: boolean;
}

const withHomeScreen = (DumbComponent: ComponentType<HomeScreenProps>) => () => {
    const dispatch = useAppDispatch();
    const route = useRoute<RouteProp<RootStackParamList>>();

    const [isHistorySearchBarOpen, setIsHistorySearchBarOpen] = useState<boolean>(false);

    const handleGoToProfile = () => {
        dispatch(navigateAction({
            screen: NavigationScreens.Profile,
        }))
    };

    const handleGoToSearch = () => {
        dispatch(navigateAction({
            screen: NavigationScreens.SearchRecipes
        }))
    };

    const toggleHistoryVisibility = () => setIsHistorySearchBarOpen(prevState => !prevState);
     

    return (
        <DumbComponent
           onGoToProfile={handleGoToProfile}
           isHistoryVisible={isHistorySearchBarOpen}
           onGoToSearch={handleGoToSearch}
           onToggleHistory={toggleHistoryVisibility}
        />
    )
}

export default withHomeScreen;