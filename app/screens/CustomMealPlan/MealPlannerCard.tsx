import React from 'react';
import { View, StyleSheet, ViewStyle, Image } from 'react-native';

import { IFood } from 'app/types/entity/Food';
import Text from 'app/components/Text';
import Button from 'app/components/Button';
import theme from 'app/theme/defaultTheme';
import { FontWeights, TextTypes } from 'app/types/entity/Texts';
import { ButtonTypes } from 'app/types/entity/Button';

interface IProps {
    title: string,
    totalCalories: number,
    data: IFood[],
    hideAddNew?: boolean,
    style?: ViewStyle | ViewStyle[]
}

const MealPlannerCard: React.FC<IProps> = (props) => {
    return (
        <View style={styles.container}>

            <View style={styles.titleRow}>
                <Text style={styles.cardTitle} weight={FontWeights.BOLD} type={TextTypes.SUB_TITLE}>{props.title}</Text>
                <View style={styles.totalCaloriesBadge}>
                    <Text weight={FontWeights.MEDIUM} style={styles.totalCaloriesText}>{props.totalCalories}</Text>
                </View>
            </View>

            {/* Food list */}
            <View style={styles.foodRow}>
                <Image source={require('app/assets/images/eggs.jpg')} resizeMode="cover" style={styles.foodImage}></Image>
                <View style={styles.foodRowTextsContainer}>
                    <Text weight={FontWeights.MEDIUM} style={styles.foodRowTitle}>6x Scrambled Eggs</Text>
                    <Text weight={FontWeights.MEDIUM} type={TextTypes.PARAGRAPH} style={styles.foodRowCalories}>300 Calories</Text>
                </View>
            </View>

            <View style={styles.foodRow}>
                <Image source={require('app/assets/images/strawberry.jpg')} resizeMode="cover" style={styles.foodImage}></Image>
                <View style={styles.foodRowTextsContainer}>
                    <Text weight={FontWeights.MEDIUM} style={styles.foodRowTitle}>5x Strawberry</Text>
                    <Text weight={FontWeights.MEDIUM} type={TextTypes.PARAGRAPH} style={styles.foodRowCalories}>100 Calories</Text>
                </View>
            </View>

            {/* Add new buttons */}
            {
                !props.hideAddNew ? (
                    <Button title="Add New" type={ButtonTypes.PRIMARY} onPress={() => { }} flex style={styles.addNewButton} />
                ) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.BACKGROUND_SECONDARY,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.62,
        elevation: 4,
    },
    cardTitle: {
        color: theme.TEXT_COLOR_DEFAULT
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    totalCaloriesBadge: {
        borderRadius: 15,
        backgroundColor: theme.BACKGROUND_PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
    },
    totalCaloriesText: {
        color: theme.TEXT_COLOR_SECONDARY,
        paddingHorizontal: 16
    },
    foodRow: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center'
    },
    foodImage: {
        width: 52,
        height: 52,
        borderRadius: 52 / 2,
        backgroundColor: theme.BACKGROUND_TERTIARY
    },
    foodRowTextsContainer: {
        marginLeft: 16
    },
    foodRowTitle: {
        color: theme.TEXT_COLOR_DEFAULT
    },
    foodRowCalories: {
        color: theme.TEXT_COLOR_PRIMARY
    },
    addNewButton: {
        marginHorizontal: 8,
        marginVertical: 16
    }
})


export default MealPlannerCard;