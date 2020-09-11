import theme from 'app/theme/defaultTheme';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View, ViewStyle } from 'react-native';

import Text from 'app/components/Text';
import { FontWeights, TextTypes } from 'app/types/entity/Texts';
import QuantityInput from 'app/components/QuantityInput';


interface IProps {
    style?: ViewStyle | ViewStyle[]
}

const FoodCard: React.FC<IProps> = (props) => {

    const [qty, setQty] = useState(1);
    const [selected, setSelected] = useState(false);

    return (
        <Pressable style={[styles.container, props.style]}>
            <Image source={require('app/assets/images/strawberry.jpg')} style={styles.thumbnail} resizeMode="cover" />

            <View style={styles.content}>
                <View>
                    <Text weight={FontWeights.BOLD} style={styles.title}>Scrambled Eggs</Text>
                    <Text style={styles.caloryCount}>200 Calories</Text>
                </View>

                <View>
                    <Pressable style={[styles.addButton, selected ? styles.addButtonSelected : styles.addButtonDefault]} hitSlop={10} onPress={() => setSelected(!selected)}>
                        <Text style={[styles.addText, selected ? styles.addTextSelected : styles.addTextDefault]} type={TextTypes.BODY}>Add</Text>
                    </Pressable>
                    <QuantityInput disabled={!selected} value={qty} onValueChange={setQty} style={styles.qtyPicker} />
                </View>
            </View>


        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 16,
        backgroundColor: theme.BACKGROUND_SECONDARY,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.62,
        elevation: 4,
    },
    thumbnail: {
        marginLeft: 16,
        width: 52,
        height: 52,
        borderRadius: 52 / 2
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
        marginLeft: 16,
        marginRight: 8
    },
    title: {
        color: theme.TEXT_COLOR_DEFAULT
    },
    caloryCount: {
        color: theme.TEXT_COLOR_PRIMARY
    },
    addButton: {
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: theme.BACKGROUND_PRIMARY,
        height: 22,
        justifyContent: 'center',
    },
    addButtonSelected: {
        backgroundColor: theme.BACKGROUND_PRIMARY
    },
    addButtonDefault: {
        backgroundColor: theme.BACKGROUND_SECONDARY
    },
    addTextSelected: {
        color: theme.TEXT_COLOR_SECONDARY
    },
    addTextDefault: {
        color: theme.TEXT_COLOR_TERTIARY
    },
    addText: {
        textAlign: 'center'
    },
    qtyPicker: {
        marginTop: 24
    }
})

export default FoodCard;