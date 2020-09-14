import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, FlatList, View } from 'react-native';

import ViewWrapper from 'app/components/ViewWrapper';
import theme from 'app/theme/defaultTheme';
import Category from './Category';
import ArticleCard from './ArticleCard';
import Text from 'app/components/Text';
import { FontWeights } from 'app/types/entity/Texts';
import NavigationUtils from 'app/utils/NavigationUtils';

const MockData = [
    { title: 'Shakes', selected: true },
    { title: 'Keto' },
    { title: 'Fat Loss' },
    { title: 'Zumba' },
    { title: 'Exercises' },
    { title: 'Cardio' },
    { title: 'Salads' },
]

const Feed: React.FC = (props) => {

    const navigation = useNavigation();
    const { t } = useTranslation('Feed');

    useEffect(() => {
        navigation.setOptions({
            title: t('index.title')
        })
    }, [])

    const onClickArticle = () => {
        NavigationUtils.navigate('ArticleScreen');
    }

    return (
        <ViewWrapper withoutScrollView isReady={true} withInsetsBottom withAnimation withSafeAreaView safeAreaBackgroundColor={theme.BACKGROUND_PRIMARY} barStyle={theme.BAR_STYLE_SECONDARY}>
            {/* Category slider */}
            <View>
                <Text style={styles.title} weight={FontWeights.BOLD}>Category</Text>
                <FlatList
                    style={styles.categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={MockData}
                    renderItem={({ item }) => <Category title={item.title} selected={item.selected} />}
                    keyExtractor={(index) => `${index}`}
                    ItemSeparatorComponent={() => <View style={styles.categoryItemSeperator} />}
                />
            </View>

            {/* Blog list */}
            <FlatList
                style={styles.articles}
                contentContainerStyle={styles.articlesContainer}
                showsVerticalScrollIndicator={false}
                data={MockData}
                renderItem={({ item }) => <ArticleCard onPress={onClickArticle} />}
                keyExtractor={(index) => `article-${index}`}
                ItemSeparatorComponent={() => <View style={styles.blogItemSeperator} />}
            />
        </ViewWrapper>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    categoryItemSeperator: {

    },
    title: {
        marginHorizontal: 16,
        marginTop: 16,
        color: theme.TEXT_COLOR_DEFAULT
    },
    categories: {
        marginVertical: 16,
        // marginHorizontal: 16
    },
    blogItemSeperator: {
        height: 16
    },
    articles: {
        paddingHorizontal: 16,
        marginTop: 8
    },
    articlesContainer: {
        paddingBottom: 36
    }
})

export default Feed;