import { Ionicons } from '@expo/vector-icons';

export type FormControlInputComponentType = {
    type: "text" | "password";
    isValid: boolean;
    id: string;
    errorMessage: string;
    placeholder: string;
    variant: "outline" | "underline" | "filled";
    onChange: (id: string, enteredValue: string | number | boolean) => void;
    inputProps?: object;
    icon?: keyof typeof Ionicons.glyphMap;
    label?: string;
}

export enum ReusableComponentType {
    Base = "Base",
    Secondary = 'Secondary',
}

export type ReusableComponentValuesType = [string, string, string];