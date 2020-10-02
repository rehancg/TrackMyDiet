import React, { useState } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View, GestureResponderEvent } from 'react-native';
import { useDispatch } from 'react-redux';

import Header from './Header';
import ViewWrapper from 'app/components/ViewWrapper';
import theme from 'app/theme/defaultTheme';
import Text from 'app/components/Text';
import { TextTypes } from 'app/types/entity/Texts';
import Icon from 'app/components/Icon';
import { useTranslation } from 'react-i18next';
import MealPlanCard from 'app/components/MealPlanCard';
import NavigationUtils from 'app/utils/NavigationUtils';
import NavigationDrawerModal from 'app/components/NavigationDrawerModal';
import { useNavigation } from '@react-navigation/native';

interface IProps {
    onToggleDrawer: ((event: GestureResponderEvent) => void) | undefined
}

const RecommenedListHeader: React.FC<IProps> = (props) => {
    const { t } = useTranslation('Home');
    const navigation = useNavigation();

    const handleNewMealAction = () => {
        navigation.navigate('CustomMealPlanScreen');
    }

    return (
        <View style={styles.listHeaderContainer}>
            <Header onToggleDrawer={props.onToggleDrawer} />
            <Text type={TextTypes.BODY} style={styles.listHeaderTitle}>{t('index.recommended')}</Text>
            <TouchableOpacity style={styles.newMealCard} onPress={handleNewMealAction}>
                <Icon name="meal" style={styles.newMealCardIcon} size={32} color={theme.TEXT_COLOR_DEFAULT} />
                <Text style={styles.newMealCardText}>{t('index.createYourOwnPlan')}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const [showDrawer, setShowDrawer] = useState(false);

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer)
    }


    const onClickMealPlan = () => {
        NavigationUtils.navigate('MealPlanDetailsScreen');
    }

    return (
        <>
            <ViewWrapper withoutScrollView isReady={true} withAnimation withSafeAreaView safeAreaBackgroundColor={theme.BACKGROUND_PRIMARY} barStyle={theme.BAR_STYLE_SECONDARY} style={styles.container}>
                <FlatList
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    style={styles.recommenedListContainer}
                    contentContainerStyle={styles.recommenedList}
                    data={[1, 2]}
                    keyExtractor={(index) => `recommened-meals-${index}`}
                    renderItem={() => <MealPlanCard style={styles.cardContainer} onPress={onClickMealPlan} />}
                    ListHeaderComponent={() => <RecommenedListHeader onToggleDrawer={toggleDrawer} />}
                    ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                />
            </ViewWrapper>
            <NavigationDrawerModal isVisible={showDrawer} onToggleDrawer={toggleDrawer} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    recommenedListContainer: {
        backgroundColor: theme.BACKGROUND_SECONDARY
    },
    recommenedList: {
        paddingBottom: 50
    },
    listHeaderContainer: {
        marginBottom: 24
    },
    listHeaderTitle: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        color: theme.TEXT_COLOR_DEFAULT
    },
    newMealCard: {
        height: 65,
        marginHorizontal: 32,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 32,
        backgroundColor: theme.BACKGROUND_SECONDARY,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.62,
        elevation: 4,
    },
    newMealCardIcon: {
    },
    newMealCardText: {
        width: '100%',
        textAlign: 'center',
        color: theme.TEXT_COLOR_DEFAULT
    },
    cardContainer: {
        marginHorizontal: 24,
    },
    itemSeparator: {
        height: 16
    }
})

export default Home;