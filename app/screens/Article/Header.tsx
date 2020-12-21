import React from 'react';
import { Alert, Animated, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import Icon from 'app/components/Icon';
import NavigationUtils from 'app/utils/NavigationUtils';
import theme from 'app/theme/defaultTheme';

interface IProps {
    scrollY: Animated.Value,
    headerHeight: number
}

const Header: React.FC<IProps> = (props) => {

    const colorTransparent = 'rgba(0, 0, 0, 0)';
    const headerColor = 'rgba(50, 195, 89, 1)';

    const backgroundColor = props.scrollY.interpolate({
        inputRange: [0, props.headerHeight - 50, props.headerHeight],
        outputRange: [colorTransparent, colorTransparent, headerColor],
        extrapolate: 'clamp'
    })

    return (
        <Animated.View style={[styles.container, { backgroundColor }]}>
            <TouchableOpacity hitSlop={{
                top: 10,
                left: 10,
                bottom: 10,
                right: 10,
            }} onPress={() => { NavigationUtils.goBack(); }} style={styles.backButtonWrapper}>
                <Icon name="arrow-back" style={styles.backIcon} />
            </TouchableOpacity>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 100,
        position: 'absolute',
        top: 0,
        height: 50,
        width: '100%'
    },
    backIcon: {
        fontSize: 18,
        color: theme.BACKGROUND_SECONDARY,
    },
    backButtonWrapper: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16
    }
})
export default Header;