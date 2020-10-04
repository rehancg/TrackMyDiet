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
import Header from './Header';
import { DEVICE_WIDTH } from 'app/utils/UIHelper';

const MockData = [
    { title: 'Shakes', selected: true },
    { title: 'Keto' },
    { title: 'Fat Loss' },
    { title: 'Zumba' },
    { title: 'Exercises' },
    { title: 'Cardio' },
    { title: 'Salads' },
]

const CATEGORY_WIDTH = (DEVICE_WIDTH - 64) * 0.25

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
        <ViewWrapper withInsetsTop withoutScrollView isReady={true} withAnimation withSafeAreaView safeAreaBackgroundColor={theme.BACKGROUND_PRIMARY}>
            {/* Category slider */}
            <View style={styles.catogoriesContainer}>
                {/* <Text style={styles.title} weight={FontWeights.BOLD}>Category</Text> */}
                <FlatList
                    style={styles.categories}
                    contentContainerStyle={styles.categoriesListContainer}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={MockData}
                    automaticallyAdjustContentInsets
                    snapToInterval={CATEGORY_WIDTH}
                    renderItem={({ item }) => <Category width={CATEGORY_WIDTH} title={item.title} selected={item.selected} />}
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
        marginTop: 8
    },
    articlesContainer: {
        paddingHorizontal: 32,
        paddingBottom: 36
    },
    categoriesListContainer: {
    },
    catogoriesContainer: {
        marginHorizontal: 32
    }
})

export default Feed;