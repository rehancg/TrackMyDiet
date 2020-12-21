import React from 'react'
import { useTranslation } from 'react-i18next';

import Text from 'app/components/Text';
import TextInput from 'app/components/TextInput';
import { StyleSheet, View } from 'react-native';
import { TextTypes } from 'app/types/entity/Texts';
import { DEVICE_HEIGHT } from 'app/utils/UIHelper';
import Goals from 'app/constants/goals';
import CardOptionsList from 'app/components/CardOptionsList';

interface IProps {
    onSelect: (id: number) => void,
    goal: number,
}

const SelectGoal: React.FC<IProps> = (props) => {
    const { t } = useTranslation('Onboading')

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text type={TextTypes.TITLE} style={styles.title}>{t('goal.title')}</Text>

                <View style={styles.genderCardsContainer}>
                    <CardOptionsList value={props.goal} onSelectCard={props.onSelect} data={Goals} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: 32,
        marginHorizontal: 32,
    },
    title: {
        textAlign: 'center'
    },
    genderCard: {
        marginVertical: 8
    },
    genderCardsContainer: {
        marginTop: 32,
        flex: 1
    }
})

export default SelectGoal;