import { createRef, RefObject } from 'react';
import { NavigationContainerRef, StackActions, createNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/stack/type';

export class NavigationService {
    static navigationRef: RefObject<NavigationContainerRef<RootStackParamList>> = createRef();

    static pop() {
        this.navigationRef?.current?.dispatch(StackActions.pop());
    }

    static replace(name: keyof RootStackParamList, params?: RootStackParamList[keyof RootStackParamList]) {
        this.navigationRef?.current?.dispatch(StackActions.replace(name, params));
    }

    static navigate(name: keyof RootStackParamList, params?: RootStackParamList[keyof RootStackParamList]) {
        if(this.navigationRef?.current?.isReady()) {
            this.navigationRef?.current?.navigate(name, params);
        }
    }
}