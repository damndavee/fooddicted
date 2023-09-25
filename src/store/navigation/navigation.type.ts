import { RootStackParamList } from "../../navigation/stack/type";

export type NavigateArgs = {
   screen: keyof RootStackParamList;
   params?: RootStackParamList[keyof RootStackParamList];
}