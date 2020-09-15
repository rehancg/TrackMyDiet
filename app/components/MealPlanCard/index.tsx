import React from 'react';
import { StyleSheet, View, Image, ViewStyle, TouchableOpacity } from 'react-native';

import Text from 'app/components/Text';
import theme from 'app/theme/defaultTheme';
import { TextTypes, FontWeights } from 'app/types/entity/Texts';
import MealTypeBadge from '../MealTypeBadge';

interface IProps {
    style?: ViewStyle | ViewStyle[],
    onPress: () => void
}

const MealPlanCard: React.FC<IProps> = (props) => {
    return (
        <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
            <Image source={require('app/assets/images/background_welcome.png')} style={styles.imageContainer} resizeMode="cover" />

            {/* Render Badges */}
            <View>
                <MealTypeBadge title="Low budget" style={styles.badgeContainer} />
            </View>

            {/* Meta data */}
            <View style={styles.metaDataRow}>
                <View style={styles.metaDataCol}>
                    <Text type={TextTypes.PARAGRAPH} style={styles.metaDataTitle}>Calories</Text>
                    <Text type={TextTypes.SUB_TITLE} weight={FontWeights.BOLD} style={styles.metaDataValue}>1,900</Text>
                </View>

                <View style={styles.metaDataCol}>
                    <Text type={TextTypes.PARAGRAPH} style={styles.metaDataTitle}>Per day cost</Text>
                    <Text type={TextTypes.SUB_TITLE} weight={FontWeights.BOLD} style={styles.metaDataValue}>680.00</Text>
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
    imageContainer: {
        height: 100,
        width: '100%',
        borderRadius: 10,
    },
    badgeContainer: {
        marginTop: 16,
        marginHorizontal: 8
    },
    metaDataRow: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    metaDataCol: {
        marginRight: 16
    },
    metaDataTitle: {
        color: theme.TEXT_COLOR_DEFAULT
    },
    metaDataValue: {
        color: theme.TEXT_COLOR_DEFAULT
    },
    metaDataRowMicros: {
        marginHorizontal: 16,
        flexDirection: 'row',
        marginBottom: 16
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
    }
})

export default MealPlanCard;