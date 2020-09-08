import React, { memo, RefObject } from 'react';
import { TextInput, StyleSheet, TextStyle, TextInputProperties } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

import theme from 'app/theme/defaultTheme';

interface IProps extends TextInputProperties {
    mask: string
    refInput: React.RefObject<TextInput>
    onChangeMaskedText: (formatted: string | undefined, extracted: string | undefined) => void
}

const CustomMaskedTextInput: React.FC<IProps> = (props) => {
    //@ts-ignore
    return <TextInputMask
        onChangeText={props.onChangeMaskedText}
        {...props}
        style={[styles.input, props.style]}
    />
}

const styles = StyleSheet.create({
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.TEXT_INPUT_PRIMARY_BORDER_COLOR,
        backgroundColor: theme.TEXT_INPUT_PRIMARY_BACKGROUND_COLOR,
        paddingVertical: 16,
        paddingHorizontal: 16,
        fontFamily: 'Poppins-Regular',
        color: theme.TEXT_INPUT_PRIMARY_TEXT_COLOR
    }
})

export default memo(CustomMaskedTextInput)