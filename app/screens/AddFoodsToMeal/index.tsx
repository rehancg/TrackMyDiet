import React, { memo, useEffect } from 'react'
import { StyleSheet, FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import TextInput from 'app/components/TextInput';
import { useTranslation } from 'react-i18next';
import ViewWrapper from 'app/components/ViewWrapper';
import Button from 'app/components/Button';
import theme from 'app/theme/defaultTheme';
import FoodCard from './FoodCard';
import { ButtonTypes } from 'app/types/entity/Button';

const AddFoodsToMeal: React.FC = () => {
    const { t } = useTranslation('AddNewFood');
    const appTranslations = useTranslation('App');
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: t('index.title'),
        })
    }, [])


    return (
        <ViewWrapper withoutScrollView isReady={true} withInsetsTop withSafeAreaView withAnimation safeAreaBackgroundColor={theme.BACKGROUND_SECONDARY} barStyle={theme.BAR_STYLE_DEFAULT}>
            <TextInput style={styles.searchContainer} placeholder={appTranslations.t('search')} />

            <FlatList
                data={[1, 2]}
                keyExtractor={(index) => `foodcard-${index}`}
                renderItem={() => <FoodCard />}
                style={styles.list}
                contentContainerStyle={styles.foodListContainer}
                bounces={false}
                ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            />

            <Button flex type={ButtonTypes.PRIMARY} title="Add Food" onPress={() => { }} style={styles.addBtn} />

        </ViewWrapper>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        borderRadius: 40,
        marginHorizontal: 16,
        marginVertical: 16
    },
    list: {
        // paddingTop: 8
    },
    foodListContainer: {
        paddingTop: 8,
        paddingHorizontal: 16,
        paddingBottom: 40
    },
    itemSeparator: {
        height: 16
    },
    addBtn: {
        marginHorizontal: 16
    }
})

export default memo(AddFoodsToMeal);