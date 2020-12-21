import React from 'react';
import { View } from 'react-native';

import AgeSpinner from 'app/components/AgeSpinner'
import Button from 'app/components/Button';
import { useTranslation } from 'react-i18next';

interface IProps {

}

const EditAge: React.FC<IProps> = () => {

    const { t } = useTranslation('ProfileEdit')

    return (
        <>
            <View style={styles.ageSpinnerContainer}>
                <AgeSpinner defaultAge={10} onChangeAge={() => { }} />
            </View>
            <Button style={styles.saveBtn} onPress={() => { }} flex title={t('index.save')} />
        </>
    )
}

const styles = {
    container: {
        flex: 1
    },
    ageSpinnerContainer: {
        flex: 1,
        marginTop: 16
    },
    saveBtn: {
        marginTop: 'auto',
        marginBottom: 32,
        marginHorizontal: 32
    }
}

export default EditAge;