import { ParamListBase, RouteProp } from '@react-navigation/native';
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { COLORS } from '../../utils/tokens';

export const BottomNavigation = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const onPressTab = (route: RouteProp<ParamListBase, keyof ParamListBase>, isFocused: boolean) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions?.tabBarStyle?.display === 'none') {
    return null;
  }

  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;
        const isFocused = state.index === index;

        const TYPOGRAPHY_COLOR = isFocused ? COLORS.tertiary : COLORS.text;

        return (
          <TouchableOpacity
            testID="tab"
            accessibilityRole="tab"
            accessibilityHint={`Navigate to ${route.name} area of the app`}
            accessibilityLabel={route.name}
            activeOpacity={1}
            key={state.routeNames[index]}
            onPress={() => onPressTab(route, isFocused)}
            style={styles.tabBar}
          >
            <View style={styles.iconContainer}>{!!options.tabBarIcon && options.tabBarIcon({ focused: isFocused, color: TYPOGRAPHY_COLOR, size: 24 })}</View>
            <Text style={{ color: TYPOGRAPHY_COLOR, fontSize: 12 }}>
              {label as string}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    paddingTop: 11,
    paddingBottom: 10,
    backgroundColor: COLORS.navbar_light,
    borderTopColor: COLORS.navbar,
    borderTopWidth: 0.5,
  },
  iconContainer: {
    marginBottom: 4,
  },
  tabBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
