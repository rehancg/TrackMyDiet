import { StatusBarStyle } from "react-native";

const ColorPallet = {
    WHITE: '#fff',
    BLACK: '#000',
    GREY: '#676767',
    LIGHT_GREY: '#D6D6D6',
    DARK_GREY: '#707070',
    GREEN: '#32c359',
}

const theme = {
    // Text colors
    TEXT_COLOR_PRIMARY: ColorPallet.GREY,
    TEXT_COLOR_SECONDARY: ColorPallet.WHITE,
    TEXT_COLOR_TERTIARY: ColorPallet.GREEN,

    // Text input colors
    TEXT_INPUT_PRIMARY_BACKGROUND_COLOR: `${ColorPallet.LIGHT_GREY}40`,
    TEXT_INPUT_PRIMARY_PLACEHOLDER_COLOR: `${ColorPallet.DARK_GREY}40`,
    TEXT_INPUT_PRIMARY_TEXT_COLOR: ColorPallet.GREY,
    TEXT_INPUT_PRIMARY_BORDER_COLOR: `${ColorPallet.DARK_GREY}40`,

    // Background colors
    BACKGROUND_PRIMARY: ColorPallet.GREEN,
    BACKGROUND_SECONDARY: ColorPallet.WHITE,

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
    PROGRESS_BAR_FILLED: ColorPallet.GREEN
}

export default theme;