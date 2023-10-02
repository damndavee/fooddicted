import { View, StyleSheet, Text } from "react-native";
import { VStack, Heading, Input, Icon, Button } from "native-base";
// import { IconButton } from "react-native-paper";

import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/tokens";
import { StyleProps } from "../../types/common";
import IconButton from "../Buttons/IconButton";

export type SearchBarProps = {
    onChangeText?: (query: string) => void;
    onClear?: () => void;
    value?: string;
    styles?: StyleProps;
    showIcons?: boolean;
    isDisabled?: boolean;
    width: string;
    text: string;
}

const SearchBar = (props: SearchBarProps) => {
    return (
        <View style={{flex: 1}}>
          <Input
            placeholder={props.text}
            color={COLORS.navbar}
            placeholderTextColor={COLORS.navbar}
            isDisabled={false}
            width="100%"
            value={props.value}
            borderRadius="4"
            padding={2}
            // height={50}
            variant="filled"
            fontSize="16"
            outlineColor="transparent"
            backgroundColor={COLORS.navbar_light}
            onChangeText={props.onChangeText}
            InputRightElement={
                props.showIcons ? (
                        // <Icon size={8} mr={10} bgColor={COLORS.tertiary} rounded="none" as={<IconButton iconColor={COLORS.navbar_light} icon="card-search-outline" onPress={props.onClear} />} />
                        <Icon size={8} bgColor={COLORS.tertiary} rounded="none" as={<IconButton style={{marginRight: 7, padding: 7}} type="Base" name="search-sharp" size={20} showBackgroundColor isRounded={false} onPress={() => {}} />} />
                ) : undefined
             }     
            // InputRightElement={
            //     <Icon size={20} color={COLORS.text} mr={3} as={<IconButton type="Base" name="close-sharp" size={20} showBackgroundColor isRounded={false} onPress={() => {}} />} />
            // }      
          />
          <View style={styles.historyDropdown}>
            <Text>History Item #1</Text>
            <Text>History Item #2</Text>
            <Text>History Item #3</Text>
            <Text>History Item #4</Text>
            <Text>History Item #5</Text>
            <Text>History Item #6</Text>
          </View>
        </View>
    )
};

// const Example = () => {
//     const [show, setShow] = React.useState(false);
//     return (
//         <Stack space={4} w="100%" alignItems="center">
//             <Input w={{base: "75%", md: "25%"}} 
//                     InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} 
//                     placeholder="Name" />
//             <Input w={{
//             base: "75%",
//             md: "25%"
//         }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
//                 <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
//                 </Pressable>} placeholder="Password" />
//       </Stack>;
//     )
//   };

const styles = StyleSheet.create({
    historyDropdown: {
        maxHeight: 200,
        width: '100%',
        backgroundColor: COLORS.tertiary,
    }
}) 

export default SearchBar;