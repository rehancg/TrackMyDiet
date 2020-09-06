import React, { memo } from 'react';
import { TextInput, StyleSheet, TextStyle, TextInputProperties } from 'react-native';
import { TextTypes, FontWeights } from 'app/types/entity/Texts';
import theme from 'app/theme/defaultTheme';

interface IProps extends TextInputProperties {
}

const CustomTextInput: React.FC<IProps> = (props) => {
    return <TextInput {...props} style={[styles.input, props.style]} />
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

export default memo(CustomTextInput)