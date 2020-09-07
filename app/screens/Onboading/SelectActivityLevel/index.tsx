import React from 'react'
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, ScrollView } from 'react-native';

import Text from 'app/components/Text';
import { TextTypes } from 'app/types/entity/Texts';
import CardOptionsList from 'app/components/CardOptionsList';
import { ActivityLevels } from 'app/constants/activityLevels';

interface IProps {
    onSelect: (id: number) => void,
    value: number,
}

const SelectActivityLevel: React.FC<IProps> = (props) => {
    const { t } = useTranslation('Onboading')

    return (
        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text type={TextTypes.TITLE} style={styles.title}>{t('activityLevel.title')}</Text>

                <View style={styles.CardsContainer}>
                    <CardOptionsList value={props.value} onSelectCard={props.onSelect} data={ActivityLevels} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
    },
    container: {
        flex: 1,
        marginTop: 32,
        marginHorizontal: 32,
    },
    title: {
        textAlign: 'center'
    },
    CardsContainer: {
        marginTop: 16,
        flex: 1
    }
})

export default SelectActivityLevel;