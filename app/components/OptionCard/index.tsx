import React, { memo } from 'react'
import { View, StyleSheet, ViewStyle, Pressable, GestureResponderEvent, ViewProperties } from 'react-native'

import theme from 'app/theme/defaultTheme'

interface IProps {
    isSelected?: boolean,
    onSelect: ((event: GestureResponderEvent) => void) | null | undefined,
    children: React.ReactNode,
    style: ViewStyle | undefined
}

const OptionCard: React.FC<IProps> = (props) => {
    const styles = props.isSelected ? stylesSelected : stylesDefault;

    return (
        <Pressable style={({ pressed }) => [styles.container, { opacity: pressed ? 0.6 : 1 }, props.style]} onPress={props.onSelect}>
            {props.children}
        </Pressable>
    )
}

const stylesSelected = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.BACKGROUND_PRIMARY,
        borderRadius: 10,
        paddingHorizontal: 24,
        paddingVertical: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
})


const stylesDefault = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.BACKGROUND_SECONDARY,
        borderRadius: 10,
        paddingHorizontal: 24,
        paddingVertical: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
})

export default memo(OptionCard);