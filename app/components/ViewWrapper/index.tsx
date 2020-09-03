import React, { useEffect, useState, useRef, memo } from 'react'
import { Animated, StyleSheet, View, ViewStyle, ActivityIndicator, StatusBar, StatusBarStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from 'app/theme/defaultTheme';

interface IProps {
    isReady: boolean,
    withAnimation?: boolean,
    withSafeAreaView?: boolean,
    children?: React.ReactNode,
    style?: ViewStyle,
    safeAreaBackgroundColor?: string,
    barStyle?: StatusBarStyle,
    loaderColor?: string
}

interface IAcitivityIndicator {
    color?: string
}
// TODO:: Need to replace with custom activity indicator
const CustomActivityIndicator: React.FC<IAcitivityIndicator> = (props) => {
    return (
        <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator color={props.color || theme.ACTIVITY_INDICATOR_DEFAULT} />
        </View>
    )
}

const RenderContent: React.FC<IProps> = (props) => {
    const backgroundColor = props.safeAreaBackgroundColor;
    return (
        <>
            <StatusBar barStyle={props.barStyle || theme.BAR_STYLE_DEFAULT} />
            {props.withSafeAreaView ? (
                <SafeAreaView style={[styles.container, { backgroundColor }]} >
                    {props.children}
                </SafeAreaView>
            ) : (
                    <>
                        {props.children}
                    </>
                )
            }
        </>
    )
}



const ViewWrapper: React.FC<IProps> = (props) => {
    const [animation, _] = useState(new Animated.Value(0))

    useEffect(() => {
        if (props.isReady) {
            startAnimation();
        }
    }, [props.isReady])

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start()
    }

    return (
        <View style={styles.container}>
            <RenderContent {...props}>
                <Animated.View style={[styles.container, {
                    transform: [
                        {
                            translateY: props.withAnimation ? animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-5, 0],
                            }) : 1
                        }
                    ]
                }]}>
                    {
                        props.isReady ? (
                            <View style={[styles.container, props.style]}>
                                {props.children}
                            </View>
                        ) : <CustomActivityIndicator color={props.loaderColor} />
                    }

                </Animated.View>
            </RenderContent>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    activityIndicatorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default memo(ViewWrapper);