import { StyleSheet } from 'react-native';
import { Box, Pressable } from 'native-base';
import { Ionicons } from "@expo/vector-icons"
import { ReusableComponentType, ReusableComponentTypeStateIndex, ReusableComponentValuesType } from '../../types/reusableComponents';
import { COLORS } from '../../utils/tokens';
import { StyleProps } from '../../types/common';
import { COMPONENT_TYPE } from '../../utils/consts';

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
  const borderRadius = props.isRounded ? 200 : 0;

  const renderBackgroundColor = (isPressed: boolean, isHovered: boolean): string => {
    if(!props.showBackgroundColor) return 'transparent';

    if(isPressed || isHovered) return COMPONENT_TYPE[props.type][ReusableComponentTypeStateIndex.Pressed];


    return COMPONENT_TYPE[props.type][ReusableComponentTypeStateIndex.Active];
  }

  return (
    <Pressable maxW={96} onPress={props.onPress} style={styles.icon} >
      {
        ({isHovered, isFocused, isPressed}) => {
            return (
                <Box bg={renderBackgroundColor(isPressed, isHovered)} style={{transform: [{scale: isPressed ? 0.96 : 1}], padding: 5, borderRadius, ...props.style}}>
                    <Ionicons name={props.name} size={props.size} color={COMPONENT_TYPE[props.type][ReusableComponentTypeStateIndex.Color]} />
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