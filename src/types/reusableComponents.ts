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
    Primary = "Primary",
    Secondary = 'Secondary',
    Tertiary = 'Tertiary',
}

export enum ReusableComponentSize {
    Small = 'Small', 
    Medium = 'Medium',
    Big = 'Big',
    Large = 'Large'
}

export enum ReusableComponentColorThemeIndex {
    Active = 0,
    Pressed = 1,
    Color = 2,
}

export enum ReusableComponentSizeIndex {
    FontSize = 0,
    Spacing = 1,
}

export type ReusableComponentColorThemeValues = [string, string, string];
export type ReusableComponentSizeValues = [number, number];