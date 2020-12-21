import React from 'react';
import { View, ScrollView } from 'react-native';

import Button from 'app/components/Button';
import { useTranslation } from 'react-i18next';
import CardOptionsList from 'app/components/CardOptionsList';
import DietTypes from 'app/constants/dietTypes';

interface IProps {

}

const EditDietType: React.FC<IProps> = () => {

    const { t } = useTranslation('ProfileEdit')

    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            <View style={styles.container}>
                <CardOptionsList value={1} onSelectCard={() => { }} data={DietTypes} />
            </View>
            <Button style={styles.saveBtn} onPress={() => { }} flex title={t('index.save')} />
        </ScrollView>
    )
}

const styles = {
    listContainer: {
        flexGrow: 1
    },
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

export default EditDietType;