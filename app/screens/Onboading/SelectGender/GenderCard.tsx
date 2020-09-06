import React from 'react';
import { StyleSheet, View, Image, ImageSourcePropType, Pressable, ViewStyle } from 'react-native';

import theme from 'app/theme/defaultTheme';
import Text from 'app/components/Text';
import { TextTypes, FontWeights } from 'app/types/entity/Texts';
import OptionCard from 'app/components/OptionCard';

interface IGenderCardProps {
    isSelected: boolean,
    id: number,
    title: string,
    image: ImageSourcePropType,
    onSelect: (id: number) => void,
    style?: ViewStyle | undefined
}

const GenderCard: React.FC<IGenderCardProps> = (props) => {
    const styles = props.isSelected ? selectedStyles : defaultStyles;

    return (
        <OptionCard isSelected={props.isSelected} onSelect={() => props.onSelect(props.id)} style={props.style}>
            {/* Language Short code */}
            <View style={styles.leftContainer}>
                <Image source={props.image} resizeMode="contain" style={styles.genderIcon} />
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.rightTitle} type={TextTypes.SUB_TITLE} weight={FontWeights.BOLD}>{props.title}</Text>
            </View>
        </OptionCard>
    )
}

const selectedStyles = StyleSheet.create({
    leftContainer: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: theme.BACKGROUND_SECONDARY,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightTitle: {
        color: theme.TEXT_COLOR_SECONDARY
    },
    genderIcon: {
        width: 32,
        height: 47
    }
});

const defaultStyles = StyleSheet.create({
    leftContainer: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: `${theme.BACKGROUND_PRIMARY}A6`,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightTitle: {
        color: theme.TEXT_COLOR_TERTIARY
    },
    genderIcon: {
        width: 32,
        height: 47
    }
})

export default GenderCard;