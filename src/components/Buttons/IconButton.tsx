import { StyleSheet } from 'react-native';
import { Box, Pressable } from 'native-base';
import { Ionicons } from "@expo/vector-icons"
import { ReusableComponentSize, ReusableComponentType, ReusableComponentColorThemeIndex, ReusableComponentSizeIndex } from '../../types/reusableComponents';
import { COLORS } from '../../utils/tokens';
import { StyleProps } from '../../types/common';
import { COMPONENT_COLOR_THEME, COMPONENT_SIZE } from '../../utils/consts';

type IconButtonProps = {
    name: keyof typeof Ionicons.glyphMap;
    type: keyof typeof ReusableComponentType;
    size: keyof typeof ReusableComponentSize;
    onPress: () => void;
    showBackgroundColor?: boolean;
    isRounded?: boolean;
    style?: StyleProps;
}

const IconButton = (props: IconButtonProps) => {
  const borderRadius = props.isRounded ? 200 : 0;

  const renderBackgroundColor = (isPressed: boolean, isHovered: boolean): string => {
    if(!props.showBackgroundColor) return 'transparent';

    if(isPressed || isHovered) return COMPONENT_COLOR_THEME[props.type][ReusableComponentColorThemeIndex.Pressed];

    return COMPONENT_COLOR_THEME[props.type][ReusableComponentColorThemeIndex.Active];
  }

  return (
    <Pressable maxW={96} onPress={props.onPress} >
      {
        ({isHovered, isFocused, isPressed}) => {
            return (
                <Box bg={renderBackgroundColor(isPressed, isHovered)} style={{transform: [{scale: isPressed ? 0.96 : 1}], padding: 5, borderRadius, ...props.style}}>
                    <Ionicons name={props.name} size={COMPONENT_SIZE[props.size][ReusableComponentSizeIndex.FontSize]} color={COMPONENT_COLOR_THEME[props.type][ReusableComponentColorThemeIndex.Color]} />
                </Box>
            )
        }
      }
    </Pressable>
  )
}

export default IconButton;

const styles = StyleSheet.create({})