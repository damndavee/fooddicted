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
    [ReusableComponentType.Primary]: [COLORS.tertiary_light, COLORS.tertiary_dark, COLORS.navbar_light],
    [ReusableComponentType.Secondary]: [COLORS.navbar_light, COLORS.navbar, COLORS.tertiary],
    [ReusableComponentType.Tertiary]: [COLORS.listItem, COLORS.listItem_light, "#FFFFFF"]
    // [ReusableComponentType.Tertiary]: [COLORS.card_light, COLORS.card, "#FFFFFF"]
}

export const COMPONENT_SIZE: Record<ReusableComponentSize, number> = {
    [ReusableComponentSize.Small]: 12,
    [ReusableComponentSize.Medium]: 16,
    [ReusableComponentSize.Big]: 20
}