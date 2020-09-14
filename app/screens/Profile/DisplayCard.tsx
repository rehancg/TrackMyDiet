import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import theme from 'app/theme/defaultTheme';
import Text from 'app/components/Text';
import { FontWeights } from 'app/types/entity/Texts';
import Icon from 'app/components/Icon';

interface IProps {
    id: string,
    title: string,
    value: string | number,
    editMode?: boolean,
    onPress: (key: string) => void
}

const DisplayCard: React.FC<IProps> = (props) => {
    return (
        <>
            <TouchableOpacity style={styles.container} onPress={() => props.onPress(props.id)}>
                <Text style={styles.text} weight={FontWeights.MEDIUM}>{props.title}</Text>
                <Text style={styles.text} weight={FontWeights.MEDIUM}>{props.value}</Text>
                {
                    props.editMode && (
                        <View style={styles.editIcon} pointerEvents="none">
                            <Icon size={10} name="edit" color={theme.BACKGROUND_SECONDARY} />
                        </View>
                    )
                }

            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: theme.BACKGROUND_SECONDARY,
        padding: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.62,
        elevation: 4,
        justifyContent: 'space-between',
        marginVertical: 8
    },
    text: {
        color: theme.TEXT_COLOR_DEFAULT
    },
    editIcon: {
        position: 'absolute',
        right: 0,
        bottom: -8,
        // bottom: 0,
        height: 24,
        width: 24,
        borderRadius: 24 / 2,
        backgroundColor: theme.BACKGROUND_PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default DisplayCard;