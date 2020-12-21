import React, { memo } from 'react';
import { StyleSheet, ImageSourcePropType, ViewStyle } from 'react-native';

import theme from 'app/theme/defaultTheme';
import Text from 'app/components/Text';
import { TextTypes, FontWeights } from 'app/types/entity/Texts';
import OptionCard from 'app/components/OptionCard';

interface IProps {
    value: number,
    id: number,
    title: string,
    tagLine: string,
    onSelect: (id: number) => void,
    style?: ViewStyle | ViewStyle[] | undefined
}

const DataRow: React.FC<IProps> = (props) => {
    const isSelected = props.id == props.value;
    const styles = isSelected ? selectedStyles : defaultStyles;

    return (
        <OptionCard isSelected={isSelected} onSelect={() => props.onSelect(props.id)} style={[styles.container, props.style as ViewStyle]}>
            <Text type={TextTypes.TITLE} weight={FontWeights.BOLD} style={styles.texts}>{props.title}</Text>
            <Text type={TextTypes.BODY} style={styles.texts}>{props.tagLine}</Text>
        </OptionCard>
    )
}

const selectedStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // height: 100,
    },
    texts: {
        color: theme.TEXT_COLOR_SECONDARY
    },
});

const defaultStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // height: 100,
    },
    texts: {
        color: theme.TEXT_COLOR_TERTIARY
    }
})

export default memo(DataRow);