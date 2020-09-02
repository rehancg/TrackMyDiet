import React, { memo } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { TextTypes } from 'app/types/entity/TextInput';

interface IProps {
    type?: TextTypes,
    style?: TextStyle,
    children: string
}

const CustomText: React.FC<IProps> = (props) => {

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

    return <Text style={[...textStyles, props.style]}>{props.children}</Text>
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

export default memo(CustomText)