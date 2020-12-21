import React from 'react';
import { StyleSheet, View } from 'react-native';

import TextInput from 'app/components/TextInput';
import { useTranslation } from 'react-i18next';
import Button from 'app/components/Button';

interface IProps {

}

const EditName: React.FC<IProps> = () => {
    const { t } = useTranslation('ProfileEdit');
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder={t('name.inputPlaceholder')} style={styles.nameInput} />
            </View>
            {/* Save button  */}
            <Button style={styles.saveBtn} onPress={() => { }} flex title={t('index.save')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    inputContainer: {
        flex: 1,
        marginTop: 32
    },
    nameInput: {
    },
    saveBtn: {
        marginTop: 'auto',
        marginBottom: 32
    }
})

export default EditName;