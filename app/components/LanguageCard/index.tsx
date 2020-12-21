import React, { memo } from 'react'
import { View, StyleSheet, Pressable, ViewStyle } from 'react-native'

import theme from 'app/theme/defaultTheme'
import Text from 'app/components/Text';
import { ILanguage } from 'app/types/entity/Language';
import { TextTypes, FontWeights } from 'app/types/entity/Texts';

interface ILanguageCardProps {
    isSelected?: boolean,
    data: ILanguage,
    onSelect: (lang: string) => void,
    style?: ViewStyle
}

const LanguageCard: React.FC<ILanguageCardProps> = (props) => {
    const styles = props.isSelected ? stylesSelected : stylesDefault;

    return (
        <Pressable style={({ pressed }) => [styles.container, { opacity: pressed ? 0.6 : 1 }, props.style]} onPress={() => props.onSelect(props.data.id)}>
            {/* Language Short code */}
            <View style={styles.languageShortCodeContainer}>
                <Text style={styles.shortCodeText} type={TextTypes.SUB_TITLE} weight={FontWeights.BOLD}>{props.data.shortCode}</Text>
            </View>
            <View style={styles.languageTitleContainer}>
                <Text style={styles.languageTitle} type={TextTypes.SUB_TITLE} weight={FontWeights.BOLD}>{props.data.title}</Text>
            </View>
        </Pressable>
    )
}

const stylesSelected = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.BACKGROUND_PRIMARY,
        borderRadius: 10,
        paddingHorizontal: 24,
        paddingVertical: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    languageShortCodeContainer: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: theme.BACKGROUND_SECONDARY,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shortCodeText: {
        color: theme.TEXT_COLOR_PRIMARY
    },
    languageTitleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    languageTitle: {
        color: theme.TEXT_COLOR_SECONDARY
    }
})


const stylesDefault = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.BACKGROUND_SECONDARY,
        borderRadius: 10,
        paddingHorizontal: 24,
        paddingVertical: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    languageShortCodeContainer: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: theme.BACKGROUND_PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shortCodeText: {
        color: theme.TEXT_COLOR_SECONDARY
    },
    languageTitleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    languageTitle: {
        color: theme.TEXT_COLOR_TERTIARY
    }
})

export default memo(LanguageCard);