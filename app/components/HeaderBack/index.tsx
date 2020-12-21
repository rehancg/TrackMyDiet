import React from 'react';
import { StyleSheet, } from 'react-native';

import Icon from 'app/components/Icon';
import theme from 'app/theme/defaultTheme';
import { HeaderBackButton } from '@react-navigation/stack';

const HeaderBack: React.FC = (props) => {
    return (
        <Icon name="close" style={styles.container}></Icon>
    )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 18,
        color: theme.TEXT_COLOR_DEFAULT,
        marginHorizontal: 16
    }
})

export default HeaderBack;