import { StyleSheet } from 'react-native';
import { Text, FormControl, Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { FormControlInputComponentType } from '../../types/reusableComponents';
import { COLORS } from '../../utils/tokens';

const INPUT_VARIANT_STYLES = {
    "outline": {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: COLORS.text,
    },
    "filled": {
        backgroundColor: COLORS.tertiary_light,
        borderRadius: 5,
        borderWidth: 0,
    },
    "underline": {
        backgroundColor: "transparent",
        borderRadius: 0,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.text,
    }
};

const FormControlInputComponent = (props: FormControlInputComponentType) => {

    const renderLeftInputElement = () => {
        return props.icon && <Ionicons style={styles.leftElementIcon} name={props.icon} size={20} ml="2" color={props.variant === "filled" ? "white" : COLORS.text} /> ;
    }

    return (
        <FormControl isInvalid={!props.isValid} style={styles.formControl} >
            <Input
                {...INPUT_VARIANT_STYLES[props.variant]}
                onChangeText={props.onChange.bind(this, props.id)}
                fontSize={14}
                id={props.id}
                placeholder={props.placeholder}
                placeholderTextColor={props.variant === "filled" ? "lightText" : "text.500"}
                leftElement={renderLeftInputElement()}
                type={props.type}
            />
            <FormControl.ErrorMessage _text={{color: "red.600"}} leftIcon={<Ionicons size={14} name='warning-sharp' color="red" />}>
                <Text>{props.errorMessage}</Text>
            </FormControl.ErrorMessage>
        </FormControl>
    )
}

export default FormControlInputComponent;

const styles = StyleSheet.create({
    label: {
        fontSize: 12,
        marginBottom: 4,
    },
    formControl: {
        marginVertical: 10,
        paddingHorizontal: 10
    },
    leftElementIcon: {
        marginLeft: 15,
        marginRight: 5
    }
})