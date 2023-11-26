import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

import { ReusableComponentType, ReusableComponentColorThemeIndex, ReusableComponentSizeIndex, ReusableComponentSize } from '../../types/reusableComponents';
import { COMPONENT_COLOR_THEME, COMPONENT_SIZE } from '../../utils/consts';
import { SPACINGS } from '../../utils/tokens';

type Icon = keyof typeof Ionicons.glyphMap;

export type ButtonProps = {
  label: string;
  type: keyof typeof ReusableComponentType;
  size: keyof typeof ReusableComponentSize;
  variant: 'Filled' | 'Outline';
  fullWidth: boolean;
  onPress: () => void;
  leftIcon?: Icon;
  rightIcon?: Icon;
}

const Button = (props: ButtonProps) => {  
  const getButtonStyles = (pressed: boolean) => {
    const isFilled = props.variant === 'Filled';
    const color = COMPONENT_COLOR_THEME[props.type];
    const buttonWidth = props.fullWidth ? '100%' : 'auto';
    const pressedColor = pressed ? color[ReusableComponentColorThemeIndex.Pressed] : color[ReusableComponentColorThemeIndex.Active];

    return {
      bgColor: isFilled ? pressedColor : 'transparent',
      borderColor: isFilled ? 'transparent' : pressedColor,
      borderWidth: isFilled ? 0 : 2,
      borderRadius: 5,
      width: buttonWidth,
      padding: COMPONENT_SIZE[props.size][ReusableComponentSizeIndex.Spacing],
      textColor: isFilled ? color[ReusableComponentColorThemeIndex.Color] : pressedColor,
      fontSize: COMPONENT_SIZE[props.size][ReusableComponentSizeIndex.FontSize],
    }
  }

  return (
    <Pressable style={({ pressed }) => [
      {
        backgroundColor: getButtonStyles(pressed)['bgColor'],
        borderColor: getButtonStyles(pressed)['borderColor'],
        borderWidth: getButtonStyles(pressed)['borderWidth'],
        borderRadius: getButtonStyles(pressed)['borderRadius'],
        padding: getButtonStyles(pressed)['padding'],
        width: getButtonStyles(pressed)['width'],
      },
      styles.buttonContainer,
    ]}
    onPress={() => props.onPress()}
    >
      {({ pressed }) => (
        <>
        {props.leftIcon && (
          <View style={{paddingRight: SPACINGS.small}}>
            <Ionicons name={props.leftIcon} size={24} color={getButtonStyles(pressed)['textColor']} />
          </View>
        )}
        <View>
          <Text style={{color: getButtonStyles(pressed)['textColor'], fontSize: getButtonStyles(pressed)['fontSize']}}>{props.label}</Text>
        </View>
        {props.rightIcon && (
          <View style={{paddingLeft: SPACINGS.small}}>
            <Ionicons name={props.rightIcon} size={24} color={getButtonStyles(pressed)['textColor']} />
          </View>
        )}
        </>
      )}
    </Pressable>
  )
}

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: SPACINGS.small,
  },
})