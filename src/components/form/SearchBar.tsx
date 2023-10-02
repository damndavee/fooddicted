import { View, StyleSheet, Text,FlatList } from "react-native";
import { VStack, Heading, Input, Icon, Button } from "native-base";

import { COLORS } from "../../utils/tokens";
import { StyleProps } from "../../types/common";
import IconButton from "../Buttons/IconButton";

export type SearchBarProps = {
    onChangeText?: (query: string) => void;
    onSearchPress: () => void;
    onClear?: () => void;
    value?: string;
    styles?: StyleProps;
    showIcons?: boolean;
    isDisabled?: boolean;
    width: string;
    text: string;
    isOpen: boolean;
}

const HISTORY_ITEMS = [
    {label: 'History Item #1', id: "1"},
    {label: 'History Item #2', id: "2"},
    {label: 'History Item #3', id: "3"},
    {label: 'History Item #4', id: "4"},
    {label: 'History Item #5', id: "5"},
    {label: 'History Item #6', id: "6"},
    {label: 'History Item #7', id: "7"},
    {label: 'History Item #8', id: "8"},
    {label: 'History Item #9', id: "9"},
    {label: 'History Item #10', id: "10"},
]

const SearchBar = (props: SearchBarProps) => {
    return (
        <View style={{flex: 1, position: 'relative'}}>
          <Input
            placeholder={props.text}
            color={COLORS.navbar}
            placeholderTextColor={COLORS.navbar}
            isDisabled={false}
            width="100%"
            value={props.value}
            borderRadius="4"
            padding={2}
            height={50}
            variant="filled"
            fontSize="16"
            outlineColor="transparent"
            backgroundColor={COLORS.navbar_light}
            onChangeText={props.onChangeText}
            InputRightElement={
                props.showIcons ? (
                        <Icon size={8} bgColor={COLORS.tertiary} rounded="none" as={
                            <IconButton style={{marginRight: 7, padding: 7}} type="Base" name="search-sharp" size={20} showBackgroundColor isRounded={false} onPress={props.onSearchPress} />
                        } />
                ) : undefined
             }        
          />
          {/* and if there is any history item */}
          {props.isOpen && (
                <FlatList style={styles.historyDropdown} data={HISTORY_ITEMS} renderItem={(item) => <Text>{item.item.label}</Text>} keyExtractor={(item) => item.id} />
          )}
        </View>
    )
};

const styles = StyleSheet.create({
    historyDropdown: {
        position: 'absolute',
        top: 50,
        zIndex: 1001,
        // height: 200,
        width: '100%',
        backgroundColor: COLORS.tertiary,
    },
}) 

export default SearchBar;