import { RootState } from "../store";

export const previousRouteSelector = (state: RootState) => state.navigation.prevRoute;