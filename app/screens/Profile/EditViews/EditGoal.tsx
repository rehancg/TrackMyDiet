import React from 'react';
import { View } from 'react-native';

import AgeSpinner from 'app/components/AgeSpinner'
import Button from 'app/components/Button';
import { useTranslation } from 'react-i18next';
import CardOptionsList from 'app/components/CardOptionsList';
import Goals from 'app/constants/goals';

interface IProps {

}

const EditGoal: React.FC<IProps> = () => {

    const { t } = useTranslation('ProfileEdit')

    return (
        <>
            <View style={styles.container}>
                <CardOptionsList value={1} onSelectCard={() => { }} data={Goals} />
            </View>
            <Button style={styles.saveBtn} onPress={() => { }} flex title={t('index.save')} />
        </>
    )
}

const styles = {
    container: {
        flex: 1,
        marginTop: 16,
        marginHorizontal: 32
    },
    saveBtn: {
        marginTop: 'auto',
        marginBottom: 32,
        marginHorizontal: 32
    }
}

export default EditGoal;