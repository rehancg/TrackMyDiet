import Button from 'app/components/Button';
import HeightRuler from 'app/components/HeightRuler';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, View } from 'react-native';



const EditHeight: React.FC = () => {
    const { t } = useTranslation('ProfileEdit')
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.rulerContainer}>
                <HeightRuler />
            </View>
            <Button style={styles.saveBtn} onPress={() => { }} flex title={t('index.save')} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginHorizontal: 32
    },
    rulerContainer: {

    },
    saveBtn: {
        marginTop: 'auto',
        marginBottom: 32,
    }
})

export default EditHeight;