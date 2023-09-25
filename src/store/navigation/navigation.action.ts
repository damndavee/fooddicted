import { createAction } from "redux-actions";
import { NavigateArgs } from "./navigation.type";

export const navigateAction = createAction<NavigateArgs>('root/navigate');
export const popAndReplaceScreenAction = createAction<NavigateArgs>('root/popAndReplace');