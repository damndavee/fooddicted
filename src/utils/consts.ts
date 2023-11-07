import { ReusableComponentSize, ReusableComponentType, ReusableComponentValuesType } from "../types/reusableComponents"
import { COLORS } from "./tokens"

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

// rename to indicate more into colors
export const COMPONENT_TYPE: Record<ReusableComponentType, ReusableComponentValuesType> = {
    [ReusableComponentType.Primary]: [COLORS.primaryLight, COLORS.primaryDark, COLORS.secondaryLight],
    [ReusableComponentType.Secondary]: [COLORS.secondaryLight, COLORS.secondary, COLORS.primary],
    [ReusableComponentType.Tertiary]: [COLORS.tertiaryLight, COLORS.tertiary, COLORS.secondaryLight]
}

export const COMPONENT_SIZE: Record<ReusableComponentSize, number> = {
    [ReusableComponentSize.Small]: 12,
    [ReusableComponentSize.Medium]: 16,
    [ReusableComponentSize.Big]: 20
}