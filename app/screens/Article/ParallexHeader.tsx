import { DEVICE_HEIGHT } from 'app/utils/UIHelper';
import React from 'react';
import { Animated, Image, StyleSheet } from 'react-native';

interface IProps {
    scrollY: Animated.Value,
    headerHeight: number
}


const ParallexHeader: React.FC<IProps> = (props) => {

    const height = props.scrollY.interpolate({
        inputRange: [0, props.headerHeight],
        outputRange: [props.headerHeight, 0],
        extrapolate: "clamp"
    })

    const opacity = props.scrollY?.interpolate({
        inputRange: [0, props.headerHeight],
        outputRange: [1, 0],
        extrapolate: "clamp"
    })

    return (
        <Animated.Image
            source={require('app/assets/images/background_welcome.png')}
            style={[styles.container, { height, opacity }]}
            resizeMode="cover"
        />
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
})

export default ParallexHeader;