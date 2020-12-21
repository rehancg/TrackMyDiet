import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from 'app/components/Text';
import theme from 'app/theme/defaultTheme';
import { FontWeights, TextTypes } from 'app/types/entity/Texts';

const Header: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle} type={TextTypes.SUB_TITLE} weight={FontWeights.BOLD}>For your knowledge</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
        backgroundColor: theme.BACKGROUND_PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: theme.TEXT_COLOR_SECONDARY
    }
})

export default Header;