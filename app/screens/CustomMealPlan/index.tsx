import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import MealSummary from './MealSummary';
import ViewWrapper from 'app/components/ViewWrapper';
import theme from 'app/theme/defaultTheme';
import Header from './Header';
import MealDetailCard from 'app/components/MealDetailCard';

const CustomMealPlan = () => {

    return (
        <ViewWrapper withoutScrollView isReady={true} withInsetsBottom withAnimation withSafeAreaView safeAreaBackgroundColor={theme.BACKGROUND_PRIMARY} barStyle={theme.BAR_STYLE_SECONDARY} style={styles.container}>
            <Header />

            {/* <Text style={styles.title} type={TextTypes.SUB_TITLE} weight={FontWeights.BOLD}>My Custom Meal Plan</Text> */}
            <MealSummary style={styles.mealSummary} />

            <FlatList
                data={[{ title: 'Breakfast' }, { title: 'Lunch' }, { title: 'Dinner' }]}
                style={styles.list}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                keyExtractor={(index) => `customMealPlan-${index}`}
                ItemSeparatorComponent={() => <View style={styles.listSeperator} />}
                renderItem={({ item, index }) => <MealDetailCard title={item.title} data={[]} totalCalories={320} />}
            />
        </ViewWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    mealSummary: {
        marginHorizontal: 16,
        marginTop: 16,
    },
    listContainer: {
        paddingBottom: 50,
        paddingTop: 16,
        paddingHorizontal: 16
    },
    title: {
        color: theme.TEXT_COLOR_DEFAULT,
        marginVertical: 16,
        textAlign: 'center'
    },
    list: {
        marginTop: 16,
    },
    listSeperator: {
        height: 32
    }
})

export default CustomMealPlan;