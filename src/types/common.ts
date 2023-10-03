import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export interface StyleProps {
  [key: string]: ViewStyle | TextStyle | ImageStyle | any;
}