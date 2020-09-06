import React, { memo } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { TextTypes, FontWeights } from 'app/types/entity/Texts';
import { material, human } from 'react-native-typography';
import theme from 'app/theme/defaultTheme';

interface IProps {
    type?: TextTypes,
    style?: TextStyle | TextStyle[],
    children: string | React.ReactNode,
    weight?: FontWeights
}

const CustomText: React.FC<IProps> = (props) => {

    let textStyles: TextStyle[] = [styles.fontStyles];

    // Set font style variants
    switch (props.type) {
        case TextTypes.HEADING:
            textStyles.push(styles.heading);
            break;
        case TextTypes.TITLE:
            textStyles.push(styles.title);
            break;
        case TextTypes.SUB_TITLE:
            textStyles.push(styles.subTitle);
            break;
        case TextTypes.BODY:
            textStyles.push(styles.body);
            break;
        case TextTypes.PARAGRAPH:
            textStyles.push(styles.paragraph);
            break;
        default:
            textStyles.push(styles.body);
            break;
    }

    switch (props.weight) {
        case FontWeights.BOLD:
            textStyles.push({ fontFamily: 'Poppins-SemiBold' });
            break;
        case FontWeights.MEDIUM:
            textStyles.push({ fontFamily: 'Poppins-Medium' })
            break;
        case FontWeights.REGULAR:
            textStyles.push({ fontFamily: 'Poppins-Regular' })
            break;
        default:
            textStyles.push({ fontFamily: 'Poppins-Regular' })
            break;
    }

    return <Text allowFontScaling={false} style={[...textStyles, props.style]}>{props.children}</Text>
}

const styles = StyleSheet.create({
    fontStyles: {
        color: theme.TEXT_COLOR_PRIMARY
    },
    heading: {
        fontSize: 30
    },
    title: {
        fontSize: 25,
    },
    subTitle: {
        fontSize: 18,
    },
    body: {
        fontSize: 14,
    },
    paragraph: {
        fontSize: 9,
    }
})

export default memo(CustomText)