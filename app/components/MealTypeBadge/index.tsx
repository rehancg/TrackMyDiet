import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

import theme from 'app/theme/defaultTheme';
import Text from 'app/components/Text';
import { FontWeights, TextTypes } from 'app/types/entity/Texts';

interface IProps {
    type?: string,
    title: string,
    style?: ViewStyle | ViewStyle[]
}

const MealTypeBadge: React.FC<IProps> = (props) => {
    let backgroundColor = theme.MEAL_PLAN_TYPE_BADGE.FREE_BACKGROUND;

    switch (props.type) {
        default:
            break;
    }

    return (
        <View style={[styles.container, { backgroundColor }, props.style]}>
            <Text style={styles.title} type={TextTypes.PARAGRAPH}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    title: {
        color: theme.TEXT_COLOR_SECONDARY,
        paddingVertical: 4,
        paddingHorizontal: 8
    }
})

export default MealTypeBadge;