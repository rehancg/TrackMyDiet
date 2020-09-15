import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

import Icon from 'app/components/Icon';
import Text from 'app/components/Text';
import { useSize, DEVICE_WIDTH } from 'app/utils/UIHelper';
import theme from 'app/theme/defaultTheme';
import { TextTypes, FontWeights } from 'app/types/entity/Texts';

interface IProps {
    style?: ViewStyle | ViewStyle[]
}

const MealSummary: React.FC<IProps> = (props) => {
    const [size, onLayout] = useSize();
    const width = ((size?.width || DEVICE_WIDTH) / 3) - 8
    return (
        <>
            <View style={[styles.container, props.style]} onLayout={onLayout}>
                <View style={[styles.summaryCard, { width, height: width }]}>
                    <Icon name="goal" style={styles.icon}></Icon>
                    <Text type={TextTypes.PARAGRAPH} style={styles.texts}>Goal</Text>
                    <Text type={TextTypes.BODY} style={styles.texts} weight={FontWeights.BOLD}>1,900</Text>
                </View>

                <View style={[styles.summaryCard, { width, height: width }]}>
                    <Icon name="remaning" style={styles.icon}></Icon>
                    <Text type={TextTypes.PARAGRAPH} style={styles.texts}>Remaining</Text>
                    <Text type={TextTypes.BODY} style={styles.texts} weight={FontWeights.BOLD}>1,200</Text>
                </View>

                <View style={[styles.summaryCard, { width, height: width }]}>
                    <Icon name="cost" style={styles.icon}></Icon>
                    <Text type={TextTypes.PARAGRAPH} style={styles.texts}>Current cost</Text>
                    <Text type={TextTypes.BODY} style={styles.texts} weight={FontWeights.BOLD}>450.0</Text>
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

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    summaryCard: {
        backgroundColor: theme.BACKGROUND_PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    icon: {
        fontSize: 36,
        color: theme.BACKGROUND_SECONDARY,
        marginBottom: 5
    },
    texts: {
        color: theme.TEXT_COLOR_SECONDARY
    },

    metaDataRowMicros: {
        marginTop: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    metaDataColMicros: {
        height: 45,
        width: DEVICE_WIDTH * 0.28,
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
})

export default MealSummary;