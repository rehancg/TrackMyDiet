import React, { memo } from 'react';
import { TextInput, StyleSheet, TextStyle } from 'react-native';
import { TextTypes } from 'app/types/entity/Texts';

interface IProps {
    type: TextTypes,
    style?: TextStyle
}

const CustomTextInput: React.FC<IProps> = (props) => {

    let textStyles = [styles.fontStyles];

    // Set font style variants
    switch (props.type) {
        case TextTypes.HEADING:
            textStyles.push(styles.heading);
            break;
        case TextTypes.BODY:
            textStyles.push(styles.body);
            break;
        default:
            break;
    }

    return <TextInput {...props} style={[...textStyles, props.style]} />
}

const styles = StyleSheet.create({
    fontStyles: {

    },
    heading: {
        fontSize: 22
    },
    body: {

    }
})

export default memo(CustomTextInput)