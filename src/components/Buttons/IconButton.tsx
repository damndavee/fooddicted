import { StyleSheet } from 'react-native';
import { Box, Pressable } from 'native-base';
import { Ionicons } from "@expo/vector-icons"
import { ReusableComponentType, ReusableComponentValuesType } from '../../types/reusableComponents';
import { COLORS } from '../../utils/tokens';
import { StyleProps } from '../../types/common';

type IconButtonProps = {
    name: keyof typeof Ionicons.glyphMap;
    type: keyof typeof ReusableComponentType;
    size: number; //to be discussed if set 2 or 3 different sizes
    onPress: () => void;
    showBackgroundColor?: boolean;
    isRounded?: boolean;
    style?: StyleProps;
}

const IconButton = (props: IconButtonProps) => {
  const ACTIVE = 0;
  const PRESSED = 1;
  const COLOR = 2;

  const borderRadius = props.isRounded ? 200 : 0;

  const BUTTON_TYPES: Record<ReusableComponentType, ReusableComponentValuesType> = {
    [ReusableComponentType.Base]: [COLORS.tertiary_light, COLORS.tertiary_dark, COLORS.navbar_light],
    [ReusableComponentType.Secondary]: [COLORS.navbar_light, COLORS.navbar, COLORS.tertiary]
  }

  const renderBackgroundColor = (isPressed: boolean, isHovered: boolean): string => {
    if(!props.showBackgroundColor) return 'transparent';

    if(isPressed || isHovered) return BUTTON_TYPES[props.type][PRESSED];


    return BUTTON_TYPES[props.type][ACTIVE];
  }

  return (
    <Pressable maxW={96} onPress={props.onPress} style={styles.icon} >
      {
        ({isHovered, isFocused, isPressed}) => {
            return (
                <Box bg={renderBackgroundColor(isPressed, isHovered)} style={{transform: [{scale: isPressed ? 0.96 : 1}], padding: 5, borderRadius, ...props.style}}>
                    <Ionicons name={props.name} size={props.size} color={BUTTON_TYPES[props.type][COLOR]} />
                </Box>
            )
        }
      }
    </Pressable>
  )
}

export default IconButton;

const styles = StyleSheet.create({
    icon: {
        // margin: 0,
    }
})