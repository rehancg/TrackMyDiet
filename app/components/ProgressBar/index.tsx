import React, { memo, useState, useEffect } from 'react';
import { StyleSheet, View, ViewStyle, Animated, Easing } from 'react-native';
import theme from 'app/theme/defaultTheme';

interface IProps {
    progress: number,
    style: ViewStyle
}

const ProgressBar: React.FC<IProps> = (props) => {
    const [barAnimatedWidth, _] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(barAnimatedWidth, {
            toValue: props.progress,
            duration: 150,
            useNativeDriver: false
        }).start()
    }, [props.progress])

    return (
        <View style={[styles.container, props.style]}>
            <Animated.View
                style={[styles.fill, {
                    width: barAnimatedWidth.interpolate({
                        inputRange: [0, 100],
                        outputRange: ['0%', '100%'],
                    }),
                }]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 8,
        backgroundColor: theme.PROGRESS_BAR_DEFUALT,
        borderRadius: 4
    },
    fill: {
        position: 'absolute',
        borderRadius: 4,
        height: 8,
        width: '60%',
        backgroundColor: theme.PROGRESS_BAR_FILLED
    }
})

export default memo(ProgressBar);