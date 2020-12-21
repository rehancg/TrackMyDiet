import theme from 'app/theme/defaultTheme';
import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import Text from 'app/components/Text';
import { FontWeights, TextTypes } from 'app/types/entity/Texts';

interface IProps {
    onPress: () => void
}

const ArticleCard: React.FC<IProps> = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Image source={require('app/assets/images/foodDetailsBackground.png')} style={styles.thumbnail} resizeMode="cover"></Image>
            <View style={styles.textContent}>
                <Text style={styles.cardTitle} weight={FontWeights.BOLD}>Health Benefits of Exercise and Physical</Text>
                <Text style={styles.cardDesc} type={TextTypes.PARAGRAPH}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: theme.BACKGROUND_SECONDARY
    },
    thumbnail: {
        height: 110,
        width: '100%',
        borderRadius: 10,
    },
    textContent: {
        padding: 16
    },
    cardTitle: {
        color: theme.TEXT_COLOR_DEFAULT
    },
    cardDesc: {
        marginTop: 16
    }
})

export default ArticleCard;