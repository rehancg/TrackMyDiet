import React, { useEffect, useState, useRef, memo } from 'react'
import { Animated, StyleSheet, View, ViewStyle, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IProps {
    isReady: boolean,
    withAnimation?: boolean,
    withSafeAreaView?: boolean,
    children?: React.ReactNode,
    style?: ViewStyle
}

// TODO:: Need to replace with custom activity indicator
const CustomActivityIndicator: React.FC = () => {
    return (
        <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator />
        </View>
    )
}

const BodyWithSafeAreaView: React.FC<IProps> = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            {
                props.isReady ? <View style={[styles.container, props.style]}>
                    {props.children}
                </View> : <CustomActivityIndicator />
            }
        </SafeAreaView>
    )
}

const BodyWithoutSafeAreaView: React.FC<IProps> = (props) => {
    return (
        props.isReady ? <View style={[styles.container, props.style]}>
            {props.children}
        </View> : <CustomActivityIndicator />
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
                    props.withSafeAreaView ? <BodyWithSafeAreaView {...props} />
                        : <BodyWithoutSafeAreaView {...props} />
                }
            </Animated.View>
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