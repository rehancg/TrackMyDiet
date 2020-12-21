import Button from 'app/components/Button';
import WeightSetter from 'app/components/WeightSetter';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, View } from 'react-native';



const EditWeight: React.FC = () => {
    const { t } = useTranslation('ProfileEdit')
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <WeightSetter />
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

export default EditWeight;