import React, { memo } from 'react';
import { Pressable, StyleSheet, ViewStyle, GestureResponderEvent, TextStyle } from 'react-native';

import Text from 'app/components/Text';
import { ButtonTypes } from 'app/types/entity/Button';
import theme from 'app/theme/defaultTheme';
import { TextTypes, FontWeights } from 'app/types/entity/Texts';

interface IProps {
    title: string,
    onPress: ((event: GestureResponderEvent) => void) | null | undefined,
    type?: ButtonTypes,
    flex?: boolean, // For full width button
    style?: object
}

const CustomButton: React.FC<IProps> = (props) => {

    let buttonContainerStyles: ViewStyle[] = [styles.defaultButton];
    let buttonTextStyles: TextStyle[] = [styles.defaultButtonText]

    if (props.flex) buttonContainerStyles.push(styles.flexButton);

    switch (props.type) {
        case ButtonTypes.PRIMARY:
            buttonContainerStyles.push(styles.primaryButtonContainer)
            buttonTextStyles.push(styles.primaryButtonTexts)
            break;
        case ButtonTypes.SECONDARARY:
            buttonContainerStyles.push(styles.secondaryButtonContainer)
            buttonTextStyles.push(styles.secondaryButtonTexts)
            break;
        case ButtonTypes.ACTION:
            buttonContainerStyles.push(styles.actionButtonContainer)
            buttonTextStyles.push(styles.actionButtonTexts)
            break;
        default:
            buttonContainerStyles.push(styles.primaryButtonContainer)
            buttonTextStyles.push(styles.primaryButtonTexts)
            break;
    }

    return (
        <Pressable
            style={({ pressed }) => [buttonContainerStyles, props.style, { opacity: pressed ? 0.8 : 1 }]}
            onPress={props.onPress}
        >
            <Text style={buttonTextStyles} weight={FontWeights.MEDIUM}>{props.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    flexButton: {
        // flex: 1,
        alignSelf: 'stretch'
    },
    defaultButton: {
        height: 48,
        minWidth: 100,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    defaultButtonText: {
        paddingHorizontal: 24,
    },
    // Primary button styles
    primaryButtonContainer: {
        backgroundColor: theme.BUTTON_PRIMARY_BACKGROUND,
        borderWidth: 0,
        borderRadius: 4
    },
    primaryButtonTexts: {
        color: theme.BUTTON_PRIMARY_TEXT,
        fontSize: 18
    },
    // Secondary button styles
    secondaryButtonContainer: {
        backgroundColor: theme.BUTTON_SECONDARY_BACKGROUND,
        borderWidth: 2,
        borderColor: theme.BUTTON_SECONDARY_BORDER
    },
    secondaryButtonTexts: {
        color: theme.BUTTON_SECONDARY_TEXT,
        fontSize: 16
    },
    // Action button styles
    actionButtonContainer: {
        height: 32,
        backgroundColor: theme.BUTTON_ACTION_BACKGROUND,
        borderWidth: 0,
    },
    actionButtonTexts: {
        color: theme.BUTTON_ACTION_TEXT,
        fontSize: 18
    },
})

export default memo(CustomButton);