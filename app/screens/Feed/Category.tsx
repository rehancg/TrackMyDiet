import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import Text from 'app/components/Text';
import theme from 'app/theme/defaultTheme';
import { FontWeights, TextTypes } from 'app/types/entity/Texts';

interface IProps {
    title: string,
    selected?: boolean,
    width?: number
}

const Category: React.FC<IProps> = (props) => {
    return (
        <TouchableOpacity style={[styles.container, { width: props.width }]}>
            <Image source={require('app/assets/images/strawberry.jpg')} style={[styles.thumb, props.selected && styles.selectedThumb]}></Image>
            <Text style={styles.title} weight={FontWeights.MEDIUM}>{props.title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    thumb: {
        height: 52,
        width: 52,
        borderRadius: 52 / 2
    },
    selectedThumb: {
        borderWidth: 3,
        borderColor: theme.BACKGROUND_PRIMARY
    },
    title: {
        marginTop: 8,
        color: theme.TEXT_COLOR_DEFAULT
    }
})

export default Category;