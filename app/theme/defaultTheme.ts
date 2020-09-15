import { StatusBarStyle } from "react-native";

const ColorPallet = {
    WHITE: '#ffffff',
    BLACK: '#000000',
    GREY: '#676767',
    LIGHT_GREY: '#D6D6D6',
    DARK_GREY: '#707070',
    GREEN: '#32c359',
    DARK_BLUE: "#205072",
    LIGHT_BLUE: "#329D9C"
}

const theme = {
    // Text colors
    TEXT_COLOR_PRIMARY: ColorPallet.GREY,
    TEXT_COLOR_SECONDARY: ColorPallet.WHITE,
    TEXT_COLOR_TERTIARY: ColorPallet.GREEN,
    TEXT_COLOR_DEFAULT: ColorPallet.DARK_BLUE,

    // Text input colors
    TEXT_INPUT_PRIMARY_BACKGROUND_COLOR: `${ColorPallet.LIGHT_GREY}40`,
    TEXT_INPUT_PRIMARY_PLACEHOLDER_COLOR: `${ColorPallet.DARK_GREY}40`,
    TEXT_INPUT_PRIMARY_TEXT_COLOR: ColorPallet.GREY,
    TEXT_INPUT_PRIMARY_BORDER_COLOR: `${ColorPallet.DARK_GREY}40`,

    // Background colors
    BACKGROUND_PRIMARY: ColorPallet.GREEN,
    BACKGROUND_SECONDARY: ColorPallet.WHITE,
    BACKGROUND_TERTIARY: ColorPallet.LIGHT_GREY,

    // Button styles
    BUTTON_PRIMARY_BACKGROUND: ColorPallet.GREEN,
    BUTTON_PRIMARY_TEXT: ColorPallet.WHITE,
    BUTTON_PRIMARY_BORDER: 'transparent',

    BUTTON_SECONDARY_BACKGROUND: ColorPallet.GREEN,
    BUTTON_SECONDARY_TEXT: ColorPallet.WHITE,
    BUTTON_SECONDARY_BORDER: ColorPallet.WHITE,

    BUTTON_ACTION_BACKGROUND: 'transparent',
    BUTTON_ACTION_TEXT: ColorPallet.GREEN,
    BUTTON_ACTION_BORDER: 'transparent',

    // bar style
    BAR_STYLE_DEFAULT: "dark-content" as StatusBarStyle,
    BAR_STYLE_SECONDARY: "light-content" as StatusBarStyle,

    // Activity indicator
    ACTIVITY_INDICATOR_DEFAULT: ColorPallet.BLACK,
    ACTIVITY_INDICATOR_SECONDARY: ColorPallet.WHITE,

    // Progress bar
    PROGRESS_BAR_DEFUALT: ColorPallet.LIGHT_GREY,
    PROGRESS_BAR_FILLED: ColorPallet.GREEN,

    // Toggle Button
    TOGGLE_BUTTON_ACTIVE_BACKGROUND: ColorPallet.GREEN,
    TOGGLE_BUTTON_ACTIVE_TEXT: ColorPallet.WHITE,
    TOGGLE_BUTTON_ACTIVE_BORDER: ColorPallet.GREEN,

    TOGGLE_BUTTON_DEFAULT_BACKGROUND: ColorPallet.WHITE,
    TOGGLE_BUTTON_DEFULT_TEXT: ColorPallet.GREEN,
    TOGGLE_BUTTON_DEFAULT_BORDER: ColorPallet.LIGHT_GREY,

    // Slider
    SLIDER_BACKGROUND: ColorPallet.LIGHT_GREY,
    SLIDER_THUMB: ColorPallet.GREEN,

    // Tab bar
    TAB_BAR_ACTIVE_ICON_COLOR: ColorPallet.GREEN,
    TAB_BAR_INACTIVE_ICON_COLOR: ColorPallet.GREY,

    // Home page
    BMI_CARD_BACKGROUND: `${ColorPallet.DARK_BLUE}BF`,
    CALORY_CARD_BACKGROUND: ColorPallet.LIGHT_BLUE,

    MEAL_PLAN_TYPE_BADGE: {
        FREE_BACKGROUND: ColorPallet.GREEN
    },

    BOX_SHADOW: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.62,
        elevation: 4,
    }
}

export default theme;