import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

import { ReusableComponentType, ReusableComponentTypeStateIndex } from '../../types/reusableComponents';
import { COMPONENT_TYPE } from '../../utils/consts';

type Icon = keyof typeof Ionicons.glyphMap;

export type ButtonProps = {
  label: string;
  type: keyof typeof ReusableComponentType;
  size: 'Small' | 'Big';
  variant: 'Filled' | 'Outline';
  fullWidth: boolean;
  onPress: () => void;
  leftIcon?: Icon;
  rightIcon?: Icon;
}

const Button = (props: ButtonProps) => {

  
  const getButtonStyles = (pressed: boolean) => {
    const isFilled = props.variant === 'Filled';
    const color = COMPONENT_TYPE[props.type];
    const buttonWidth = props.fullWidth ? '100%' : 'auto';
    const buttonSpacing = props.size === 'Small' ? 8 : 12;
    const fontSize = props.size === 'Small' ? 14 : 16;
    const pressedColor = pressed ? color[ReusableComponentTypeStateIndex.Pressed] : color[ReusableComponentTypeStateIndex.Active];

    return {
      bgColor: isFilled ? pressedColor : 'transparent',
      borderColor: isFilled ? 'transparent' : pressedColor,
      borderWidth: isFilled ? 0 : 2,
      borderRadius: 5,
      paddingHorizontal: buttonSpacing,
      paddingVertical: buttonSpacing,
      width: buttonWidth,
      textColor: isFilled ? color[ReusableComponentTypeStateIndex.Color] : pressedColor,
      fontSize
    }
  }

  return (
    <Pressable style={({ pressed }) => [
      {
        backgroundColor: getButtonStyles(pressed)['bgColor'],
        borderColor: getButtonStyles(pressed)['borderColor'],
        borderWidth: getButtonStyles(pressed)['borderWidth'],
        borderRadius: getButtonStyles(pressed)['borderRadius'],
        paddingHorizontal: getButtonStyles(pressed)['paddingHorizontal'],
        paddingVertical: getButtonStyles(pressed)['paddingVertical'],
        width: getButtonStyles(pressed)['width'],
      },
      styles.buttonContainer,
    ]}>
      {({ pressed }) => (
        <>
        {props.leftIcon && (
          <View style={{paddingRight: 8}}>
            <Ionicons name={props.leftIcon} size={24} color={getButtonStyles(pressed)['textColor']} />
          </View>
        )}
        <View>
          <Text style={{color: getButtonStyles(pressed)['textColor'], fontSize: getButtonStyles(pressed)['fontSize']}}>{props.label}</Text>
        </View>
        {props.rightIcon && (
          <View style={{paddingLeft: 8}}>
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
    paddingHorizontal: 8,
  },
})