import React from 'react';
import { Pressable, Text } from 'react-native';

import styles from './styles';

interface IProps {
    title: string,
    style?: object
}

const CustomButton: React.FC<IProps> = (props) => {
    return (
        <Pressable {...props} style={styles.container}>
            <Text>{props.title}</Text>
        </Pressable>
    )
}

export default CustomButton;