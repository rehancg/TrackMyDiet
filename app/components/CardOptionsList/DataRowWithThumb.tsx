import React from 'react';
import { StyleSheet, View, Image, ImageSourcePropType, Pressable, ViewStyle } from 'react-native';

import theme from 'app/theme/defaultTheme';
import Text from 'app/components/Text';
import { TextTypes, FontWeights } from 'app/types/entity/Texts';
import OptionCard from 'app/components/OptionCard';

interface IProps {
    value: number,
    id: number,
    title: string,
    image: ImageSourcePropType,
    onSelect: (id: number) => void,
    style?: ViewStyle | ViewStyle[] | undefined
}

const DataRowWithThumb: React.FC<IProps> = (props) => {
    const isSelected = props.value === props.id;
    const styles = isSelected ? selectedStyles : defaultStyles;

    return (
        <OptionCard isSelected={isSelected} onSelect={() => props.onSelect(props.id)} style={props.style}>
            {/* Language Short code */}
            <View style={styles.leftContainer}>
                <Image source={props.image} resizeMode="contain" style={styles.icon} />
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
    icon: {
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
    icon: {
        width: 32,
        height: 47
    }
})

export default DataRowWithThumb;