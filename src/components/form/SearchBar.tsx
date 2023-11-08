import { View, StyleSheet, Text,FlatList } from "react-native";
import { Input, Icon } from "native-base";

import { COLORS } from "../../utils/tokens";
import { StyleProps } from "../../types/common";
import IconButton from "../buttons/IconButton";

export type SearchBarProps = {
    onChangeQuery: (query: string) => void;
    onPressSearchButton: () => void;
    width: string;
    placeholder: string;
    isSearchHistoryShown: boolean;
    isClearButtonShown: boolean;
    onClearQuery: () => void;
    onFocus: () => void;
    value: string;
    searchHistory: any[];
    styles?: StyleProps;
};

const SearchBar = (props: SearchBarProps) => {
    return (
        <View style={{flex: 1, position: 'relative'}}>
          <Input
            placeholder={props.placeholder}
            color={COLORS.secondary}
            placeholderTextColor={COLORS.secondary}
            isDisabled={false}
            width="100%"
            value={props.value}
            borderRadius="4"
            padding={2}
            height={50}
            variant="filled"
            onFocus={props.onFocus}
            fontSize="16"
            outlineColor="transparent"
            backgroundColor={COLORS.secondaryLight}
            onChangeText={props.onChangeQuery}
            InputRightElement={
                <>
                    {props.isClearButtonShown && (
                        <Icon size={8} bgColor={COLORS.primary} rounded="none" as={
                            <IconButton style={{marginRight: 7, padding: 7}} type="Secondary" name="close-sharp" size="Big" onPress={props.onClearQuery} />
                        } />
                    )}
                    <Icon size={8} bgColor={COLORS.primary} rounded="none" as={
                        <IconButton style={{marginRight: 7, padding: 7}} type="Primary" name="search-sharp" size="Big" showBackgroundColor onPress={props.onPressSearchButton} />
                    } />
                </>
             }        
          />
          {props.isSearchHistoryShown && (
                <FlatList onStartShouldSetResponder={() => true} onTouchEnd={(e) => e.stopPropagation()} style={styles.historyDropdown} data={props.searchHistory} renderItem={(item) => <Text>{item.item.label}</Text>} keyExtractor={(item) => item.id} />
          )}
        </View>
    )
};

const styles = StyleSheet.create({
    historyDropdown: {
        position: 'absolute',
        top: 50,
        zIndex: 1001,
        width: '100%',
        backgroundColor: COLORS.primary,
    },
}) 

export default SearchBar;