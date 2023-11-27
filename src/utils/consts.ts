import { ReusableComponentSize, ReusableComponentType, ReusableComponentColorThemeValues, ReusableComponentSizeValues } from "../types/reusableComponents"
import { COLORS, FONT_SIZES, SPACINGS } from "./tokens"

export const FORM_TYPE_OBJECT = {
    "signin": {
        welcome: "Welcome back!",
        btnText: "Sign in"
    },
    "signup": {
        welcome: "Create Account",
        btnText: "Create new user",
    }
}

export const COMPONENT_COLOR_THEME: Record<ReusableComponentType, ReusableComponentColorThemeValues> = {
    [ReusableComponentType.PrimaryLight]: [COLORS.primaryLight, COLORS.primaryDark, COLORS.secondaryLight],
    [ReusableComponentType.SecondaryLight]: [COLORS.secondaryLight, COLORS.secondary, COLORS.primary],
    [ReusableComponentType.TertiaryLight]: [COLORS.tertiaryLight, COLORS.tertiary, COLORS.secondaryLight],
    [ReusableComponentType.Primary]: [COLORS.primary, COLORS.primaryLight, COLORS.secondaryLight],
    [ReusableComponentType.Secondary]: [COLORS.secondary, COLORS.secondaryLight, COLORS.primary],
    [ReusableComponentType.Tertiary]: [COLORS.tertiary, COLORS.tertiaryLight, COLORS.secondaryLight] 
}

export const COMPONENT_SIZE: Record<ReusableComponentSize, ReusableComponentSizeValues> = {
    [ReusableComponentSize.Small]: [FONT_SIZES.small, SPACINGS.small],
    [ReusableComponentSize.Medium]: [FONT_SIZES.medium, SPACINGS.medium],
    [ReusableComponentSize.Big]: [FONT_SIZES.big, SPACINGS.big],
    [ReusableComponentSize.Large]: [FONT_SIZES.large, SPACINGS.large],
}