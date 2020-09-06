import React from 'react'
import { useTranslation } from 'react-i18next';

import Text from 'app/components/Text';
import { StyleSheet, View } from 'react-native';
import { TextTypes } from 'app/types/entity/Texts';

interface IProps {
}

const SetAge: React.FC<IProps> = (props) => {
    const { t } = useTranslation('Onboading')

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text type={TextTypes.TITLE} style={styles.title}>{t('age.title')}</Text>
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
    }
})

export default SetAge;