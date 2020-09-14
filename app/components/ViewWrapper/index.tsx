import React, { useEffect, useState, useRef, memo } from 'react'
import { Animated, StyleSheet, View, ViewStyle, ActivityIndicator, StatusBar, StatusBarStyle, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from 'app/theme/defaultTheme';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeArea } from 'react-native-safe-area-context';


interface IProps {
    isReady: boolean,
    withAnimation?: boolean,
    withSafeAreaView?: boolean,
    children?: React.ReactNode,
    style?: ViewStyle,
    safeAreaBackgroundColor?: string,
    barStyle?: StatusBarStyle,
    loaderColor?: string,
    withKeyboardAvoidingView?: boolean,
    disableScroll?: boolean,
    withInsets?: boolean,
    withInsetsTop?: boolean,
    withInsetsBottom?: boolean,
    withoutScrollView?: boolean
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
    const backgroundColor = props.safeAreaBackgroundColor || theme.BACKGROUND_SECONDARY;
    const insets = useSafeArea();

    return (
        <>
            <StatusBar barStyle={props.barStyle || theme.BAR_STYLE_DEFAULT} backgroundColor={backgroundColor} />
            {props.withSafeAreaView ? (
                <SafeAreaView style={[styles.container, { backgroundColor, paddingBottom: (props.withInsetsBottom || props.withInsets) ? -insets.bottom : 0, paddingTop: (props.withInsetsTop || props.withInsets) ? -insets.top : 0 }]}  >
                    {
                        props.withKeyboardAvoidingView && Platform.OS == 'ios' ? <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? "padding" : undefined}>
                            {props.children}
                        </KeyboardAvoidingView> : props.children
                    }
                </SafeAreaView>
            ) : (
                    <>
                        {
                            props.withKeyboardAvoidingView && Platform.OS == 'ios' ? <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? "padding" : undefined}>
                                {props.children}
                            </KeyboardAvoidingView> : props.children
                        }
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
                        props.isReady ? props.withoutScrollView ?
                            (
                                <View style={[styles.container, props.style]}>
                                    {props.children}
                                </View>
                            )
                            : (
                                <ScrollView showsVerticalScrollIndicator={false} bounces={false} contentContainerStyle={styles.scrollWrapper} scrollEnabled={!props.disableScroll}>
                                    <View style={[styles.container, props.style]}>
                                        {props.children}
                                    </View>
                                </ScrollView>
                            ) : <CustomActivityIndicator color={props.loaderColor} />
                    }

                </Animated.View>
            </RenderContent>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_SECONDARY,
    },
    scrollWrapper: {
        flexGrow: 1
    },
    activityIndicatorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default memo(ViewWrapper);