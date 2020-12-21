import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native'

import Text from 'app/components/Text';
import theme from 'app/theme/defaultTheme';

interface IProps {
    title: string,
    value: string | number,
    style?: ViewStyle | ViewStyle[]
}

const MetaDataCard: React.FC<IProps> = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.texts}>{props.title}</Text>
            <Text style={styles.texts}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: theme.BACKGROUND_SECONDARY,
        paddingHorizontal: 16,
        paddingVertical: 20,
        justifyContent: 'space-between',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.62,
        elevation: 3,
        alignItems: 'center',
    },
    texts: {
        color: theme.TEXT_COLOR_DEFAULT
    }
})

export default MetaDataCard;