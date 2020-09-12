import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, View } from 'react-native';


import ViewWrapper from 'app/components/ViewWrapper';
import theme from 'app/theme/defaultTheme';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from 'app/utils/UIHelper';
import Icon from 'app/components/Icon';
import { NavigationOptions } from 'app/navigation/helpers';
import Text from 'app/components/Text';
import { FontWeights, TextTypes } from 'app/types/entity/Texts';
import MetaDataCard from './MetaDataCard';

const FoodDetails: React.FC = () => {

    const { t } = useTranslation('FoodDetails');
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: t('index.title'),
            headerStyle: styles.navHeader,
            headerTitleStyle: styles.navHeaderTitle,
            headerBackImage: () => <Icon size={16} color={theme.TEXT_COLOR_SECONDARY} name="arrow-back" style={{ paddingHorizontal: 16 }} />
        })
    }, [])

    return (
        <ViewWrapper isReady={true} withInsetsTop withSafeAreaView withAnimation safeAreaBackgroundColor={theme.BACKGROUND_PRIMARY} barStyle={theme.BAR_STYLE_SECONDARY}>
            <Image source={require('app/assets/images/foodDetailsBackground.png')} resizeMode="cover" style={styles.headerBackground} />

            {/* Food title card */}
            <View style={styles.foodTitleCard}>
                <Image source={require('app/assets/images/strawberry.jpg')} resizeMode="cover" style={styles.thumbImage} />
                <View style={styles.foodTitleCardTextContainer}>
                    <Text style={styles.foodTitle} weight={FontWeights.BOLD}>Bowl of rice</Text>
                    <Text style={styles.foodTitleCardTagline}>rice, 100g</Text>
                </View>
            </View>

            {/* Calory Breakdown */}
            <View style={styles.caloryBreakdownCard}>
                {/* Total Calories */}
                <View style={styles.calaryBreakdownCircle}>
                    <Icon size={44} name="grain" color={theme.TEXT_COLOR_TERTIARY} />
                    <Text weight={FontWeights.BOLD} style={styles.caloryBreakdownValue}>170</Text>
                    <Text style={styles.caloryBreakdownText}>Total calories</Text>
                </View>

                {/* Micros */}
                <View style={styles.micros}>
                    <View style={styles.microsCard}>
                        <Text type={TextTypes.PARAGRAPH} style={styles.microsText}>Protein</Text>
                        <Text weight={FontWeights.BOLD} style={styles.microsText}>25g</Text>
                    </View>

                    <View style={styles.microsCard}>
                        <Text type={TextTypes.PARAGRAPH} style={styles.microsText}>Carbs</Text>
                        <Text weight={FontWeights.BOLD} style={styles.microsText}>25g</Text>
                    </View>

                    <View style={styles.microsCard}>
                        <Text type={TextTypes.PARAGRAPH} style={styles.microsText}>Fat</Text>
                        <Text weight={FontWeights.BOLD} style={styles.microsText}>25g</Text>
                    </View>
                </View>
            </View>

            {/* Meta info */}
            <View style={styles.metaCardsContainer}>
                <MetaDataCard title={t('index.servingSize')} value='100g' style={styles.metaDataCard} />
                <MetaDataCard title={t('index.numberOfServings')} value='1' style={styles.metaDataCard} />
                <MetaDataCard title={t('index.preferredTime')} value='Breakfast' style={styles.metaDataCard} />
            </View>

        </ViewWrapper>
    )
}

const styles = StyleSheet.create({
    navHeader: {
        backgroundColor: theme.BACKGROUND_PRIMARY
    },
    navHeaderTitle: {
        ...NavigationOptions.stackNavigator.default.headerTitleStyle,
        color: theme.TEXT_COLOR_SECONDARY,
    },
    headerBackground: {
        position: 'absolute',
        top: 0,
        height: DEVICE_HEIGHT / 3,
        width: DEVICE_WIDTH,
        backgroundColor: theme.BACKGROUND_PRIMARY,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    foodTitleCard: {
        flexDirection: 'row',
        backgroundColor: theme.BACKGROUND_SECONDARY,
        marginTop: 32,
        borderRadius: 10,
        padding: 16,
        marginHorizontal: 32,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.62,
        elevation: 4,
    },
    foodTitleCardTextContainer: {
        marginLeft: 16
    },
    foodTitle: {
        color: theme.TEXT_COLOR_DEFAULT
    },
    foodTitleCardTagline: {
        color: theme.TEXT_COLOR_PRIMARY
    },
    thumbImage: {
        width: 52,
        height: 52,
        borderRadius: 52 / 2
    },

    caloryBreakdownCard: {
        backgroundColor: theme.BACKGROUND_SECONDARY,
        marginTop: 32,
        marginHorizontal: 32,
        paddingVertical: 32,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.62,
        elevation: 4,
    },
    calaryBreakdownCircle: {
        width: DEVICE_WIDTH * 0.5,
        height: DEVICE_WIDTH * 0.5,
        borderRadius: (DEVICE_WIDTH * 0.5) / 2,
        borderWidth: 2,
        borderColor: theme.BACKGROUND_PRIMARY,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.62,
        alignItems: 'center',
        justifyContent: 'center',
    },
    caloryBreakdownValue: {
        color: theme.TEXT_COLOR_TERTIARY,
        textAlign: 'center',
        fontSize: 36
    },
    caloryBreakdownText: {
        color: theme.TEXT_COLOR_DEFAULT,
        textAlign: 'center'
    },
    micros: {
        flexDirection: 'row',
        marginTop: 32
    },
    microsCard: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: theme.CALORY_CARD_BACKGROUND,
        marginHorizontal: 8
    },
    microsText: {
        color: theme.TEXT_COLOR_SECONDARY,
        textAlign: 'center'
    },

    metaCardsContainer: {
        paddingHorizontal: 32,
        paddingTop: 24,
        paddingBottom: 32
    },
    metaDataCard: {
        marginVertical: 8,
    }
})

export default FoodDetails;