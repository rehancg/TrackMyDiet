import React, { useEffect } from 'react';
import { Image, StyleSheet, View, FlatList } from 'react-native';

import ViewWrapper from 'app/components/ViewWrapper';
import theme from 'app/theme/defaultTheme';
import Text from 'app/components/Text';
import { FontWeights, TextTypes } from 'app/types/entity/Texts';
import { useSize } from 'app/utils/UIHelper';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import MealDetailCard from 'app/components/MealDetailCard';

const MealDetails: React.FC = () => {
    const [size, onLayout] = useSize()
    const navigation = useNavigation();
    const { t } = useTranslation('MealPlanDetails');

    useEffect(() => {
        navigation.setOptions({
            title: t('index.title')
        })
    }, [])

    return (
        <ViewWrapper withoutScrollView isReady={true} withInsetsTop withSafeAreaView withAnimation safeAreaBackgroundColor={theme.BACKGROUND_SECONDARY} barStyle={theme.BAR_STYLE_DEFAULT} >

            {/* Summary Card */}
            <View style={styles.headerContainer}>
                <View style={styles.headerCard} onLayout={onLayout}>
                    <Image source={require('app/assets/images/home_page_card_background.png')} style={[styles.cardBackgroundImage, { width: size?.height, height: size?.height }]} resizeMode="contain" />
                    <View style={styles.row}>
                        <View>
                            <Text type={TextTypes.PARAGRAPH} style={styles.headerCardTexts}>Calories</Text>
                            <Text type={TextTypes.SUB_TITLE} weight={FontWeights.BOLD} style={styles.headerCardTexts}>1,900</Text>
                        </View>

                        <View style={styles.marginLeft}>
                            <Text type={TextTypes.PARAGRAPH} style={styles.headerCardTexts}>Per day cost</Text>
                            <Text type={TextTypes.SUB_TITLE} weight={FontWeights.BOLD} style={styles.headerCardTexts}>680.00</Text>
                        </View>
                    </View>

                    {/* Meta data - micros */}
                    <View style={styles.metaDataRowMicros}>
                        <View style={styles.metaDataColMicros}>
                            <Text type={TextTypes.PARAGRAPH} style={styles.metaDataMicrosTitle}>Protien</Text>
                            <Text type={TextTypes.BODY} weight={FontWeights.BOLD} style={styles.metaDataMicrosValue}>25g</Text>
                        </View>

                        <View style={styles.metaDataColMicros}>
                            <Text type={TextTypes.PARAGRAPH} style={styles.metaDataMicrosTitle}>Carbs</Text>
                            <Text type={TextTypes.BODY} weight={FontWeights.BOLD} style={styles.metaDataMicrosValue}>22g</Text>
                        </View>

                        <View style={styles.metaDataColMicros}>
                            <Text type={TextTypes.PARAGRAPH} style={styles.metaDataMicrosTitle}>Fats</Text>
                            <Text type={TextTypes.BODY} weight={FontWeights.BOLD} style={styles.metaDataMicrosValue}>2g</Text>
                        </View>
                    </View>
                </View>
            </View>

            <FlatList
                data={[{ title: 'Breakfast' }, { title: 'Lunch' }, { title: 'Dinner' }]}
                style={styles.list}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                keyExtractor={(index) => `customMealPlan-${index}`}
                ItemSeparatorComponent={() => <View style={styles.listSeperator} />}
                renderItem={({ item, index }) => <MealDetailCard title={item.title} data={[]} totalCalories={320} hideAddNew />}
            />

        </ViewWrapper>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 32
    },
    headerCard: {
        ...theme.BOX_SHADOW,
        paddingHorizontal: 32,
        paddingVertical: 16,
        backgroundColor: theme.BACKGROUND_PRIMARY,
        marginVertical: 16,
        borderRadius: 10,
    },
    row: {
        flexDirection: 'row'
    },
    marginLeft: {
        marginLeft: 32
    },
    headerCardTexts: {
        color: theme.TEXT_COLOR_SECONDARY
    },
    cardBackgroundImage: {
        position: 'absolute',
        right: 0,
    },
    metaDataRowMicros: {
        marginTop: 24,
        flexDirection: 'row',
    },
    metaDataColMicros: {
        marginRight: 16,
        height: 45,
        width: 60,
        borderRadius: 2,
        backgroundColor: theme.CALORY_CARD_BACKGROUND,
        alignItems: 'center',
        justifyContent: 'center',
    },
    metaDataMicrosTitle: {
        color: theme.TEXT_COLOR_SECONDARY,
    },
    metaDataMicrosValue: {
        color: theme.TEXT_COLOR_SECONDARY,
    },
    list: {
        marginTop: 16,
    },
    listSeperator: {
        height: 32
    },
    listContainer: {
        paddingBottom: 50,
        paddingTop: 16,
        paddingHorizontal: 32
    },
})

export default MealDetails;