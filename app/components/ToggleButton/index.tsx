import React from 'react';
import { View, StyleSheet, Pressable, ViewStyle } from 'react-native';

import Text from 'app/components/Text';
import theme from 'app/theme/defaultTheme';

interface IProps {
    options: { shortCode: string, title: string }[],
    onToggle: (shortCode: string) => void,
    selectedOption: string,
    style?: ViewStyle | ViewStyle[]
}

const ToggleButton: React.FC<IProps> = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            {
                props.options.map(opt => (
                    <Pressable
                        onPress={() => props.onToggle(opt.shortCode)}
                        style={({ pressed }) => [
                            styles.toggleOption,
                            opt.shortCode === props.selectedOption ? styles.toggleOptionSelected : styles.toggleOptionDefault,
                            { opacity: pressed ? 0.6 : 1 }
                        ]}>
                        <Text
                            style={[
                                opt.shortCode === props.selectedOption ? styles.toggleOptionSelectedText : styles.toggleOptionDefaultText,
                            ]}>{opt.title}</Text>
                    </Pressable>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        flexDirection: 'row',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 16,
        borderColor: theme.TOGGLE_BUTTON_DEFAULT_BORDER,
        height: 28
    },
    toggleOption: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        paddingHorizontal: 16,
    },
    toggleOptionSelected: {
        backgroundColor: theme.TOGGLE_BUTTON_ACTIVE_BACKGROUND,
    },
    toggleOptionSelectedText: {
        color: theme.TOGGLE_BUTTON_ACTIVE_TEXT
    },
    toggleOptionDefault: {
        backgroundColor: theme.TOGGLE_BUTTON_DEFAULT_BACKGROUND,
    },
    toggleOptionDefaultText: {
        color: theme.TOGGLE_BUTTON_DEFULT_TEXT
    }
})

export default ToggleButton;