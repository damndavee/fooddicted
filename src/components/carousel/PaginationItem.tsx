import { View } from "native-base";
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated";
import { COLORS } from "../../utils/tokens";

const PaginationItem: React.FC<{
    index: number
    length: number
    animValue: Animated.SharedValue<number>
    isRotate?: boolean
  }> = (props) => {
    const { animValue, index, length, isRotate } = props;
    const width = 10;
  
    const animStyle = useAnimatedStyle(() => {
      let inputRange = [index - 1, index, index + 1];
      let outputRange = [-width, 0, width];
  
      if (index === 0 && animValue?.value > length - 1) {
        inputRange = [length - 1, length, length + 1];
        outputRange = [-width, 0, width];
      }
  
      return {
        transform: [
          {
            translateX: interpolate(
              animValue?.value,
              inputRange,
              outputRange,
              Extrapolate.CLAMP,
            ),
          },
        ],
      };
    }, [animValue, index, length]);

    return (
      <View
        style={{
          backgroundColor: COLORS.secondary,
          width,
          height: width,
          borderRadius: 50,
          overflow: "hidden",
          transform: [
            {
              rotateZ: isRotate ? "90deg" : "0deg",
            },
          ],
        }}
      >
        <Animated.View
          style={[
            {
              borderRadius: 50,
              backgroundColor: COLORS.primaryDark,
              flex: 1,
            },
            animStyle,
          ]}
        />
      </View>
    );
};

export default PaginationItem;