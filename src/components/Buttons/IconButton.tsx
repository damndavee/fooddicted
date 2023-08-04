import { StyleSheet } from 'react-native';
import { Box, Pressable } from 'native-base';
import { Ionicons } from "@expo/vector-icons"

type IconButtonProps = {
    name: keyof typeof Ionicons.glyphMap;
    color: string;
    size: number; //to be discussed if set 2 or 3 different sizes
    onPress?: () => void;
}

const IconButton = (props: IconButtonProps) => {
  return (
    <Pressable maxW={96} onPress={props.onPress} style={styles.icon} >
      {
        ({isHovered, isFocused, isPressed}) => {
            return (
                <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "transparent"} style={{transform: [{scale: isPressed ? 0.96 : 1}]}}>
                    <Ionicons name={props.name} size={props.size} color={props.color} />
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
        margin: 0
    }
})