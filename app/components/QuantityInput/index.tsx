import theme from 'app/theme/defaultTheme';
import React from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';

import Text from 'app/components/Text';

const WIDTH = 80;

interface IProps {
    value: number,
    onValueChange: (count: number) => void,
    disabled?: boolean,
    style?: ViewStyle | ViewStyle[]
}

const QuantityInput: React.FC<IProps> = (props) => {
    return (
        <View style={[styles.container, props.disabled ? styles.disabled : {}, props.style]} >
            <Pressable style={styles.button} hitSlop={10} onPress={() => props.onValueChange(props.value > 1 ? --props.value : 1)}>
                <Text style={styles.signFont}>-</Text>
            </Pressable>

            <Text style={[styles.count, { width: WIDTH / 3 }]}>{props.value}</Text>

            <Pressable style={styles.button} hitSlop={10} onPress={() => props.onValueChange(++props.value)}>
                <Text style={styles.signFont}>+</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 22,
        backgroundColor: theme.BACKGROUND_PRIMARY,
        width: WIDTH,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    disabled: {
        opacity: 0.6
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signFont: {
        color: theme.TEXT_COLOR_SECONDARY,
        textAlign: 'center'
    },
    count: {
        backgroundColor: theme.BACKGROUND_SECONDARY,
        textAlign: 'center'
    }
})

export default QuantityInput;