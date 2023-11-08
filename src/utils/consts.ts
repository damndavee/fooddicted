import { ReusableComponentSize, ReusableComponentType, ReusableComponentColorThemeValues, ReusableComponentSizeValues } from "../types/reusableComponents"
import { COLORS, FONT_SIZES, SPACINGS } from "./tokens"

export const FORM_TYPE_OBJECT = {
    "signin": {
        link: "Don't have account? Sign up for free!",
        btnText: "Sign in"
    },
    "signup": {
        link: "Already have account? Sign in!",
        btnText: "Create new user"
    }
}

export const COMPONENT_COLOR_THEME: Record<ReusableComponentType, ReusableComponentColorThemeValues> = {
    [ReusableComponentType.Primary]: [COLORS.primaryLight, COLORS.primaryDark, COLORS.secondaryLight],
    [ReusableComponentType.Secondary]: [COLORS.secondaryLight, COLORS.secondary, COLORS.primary],
    [ReusableComponentType.Tertiary]: [COLORS.tertiaryLight, COLORS.tertiary, COLORS.secondaryLight]
}

// same approach as color theme fontSize, spacing, ...
export const COMPONENT_SIZE: Record<ReusableComponentSize, ReusableComponentSizeValues> = {
    [ReusableComponentSize.Small]: [FONT_SIZES.small, SPACINGS.small],
    [ReusableComponentSize.Medium]: [FONT_SIZES.medium, SPACINGS.medium],
    [ReusableComponentSize.Big]: [FONT_SIZES.big, SPACINGS.big],
    [ReusableComponentSize.Large]: [FONT_SIZES.large, SPACINGS.large],
}