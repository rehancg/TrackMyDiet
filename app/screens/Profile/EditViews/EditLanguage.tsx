import React from 'react';
import { StyleSheet, View } from 'react-native';

import LanguageCard from 'app/components/LanguageCard';
import { Languages } from 'app/constants/languages';
import Button from 'app/components/Button'
import { useTranslation } from 'react-i18next';

interface IProps {

}

const EditLanguage: React.FC<IProps> = () => {
    const selectedLang = '';
    const { t } = useTranslation('ProfileEdit')

    const onLanguageSelect = () => {

    }

    return (
        <View style={styles.languagesContainer}>
            {
                Languages.map(lang => (
                    <LanguageCard
                        key={lang.id}
                        isSelected={selectedLang === lang.id}
                        style={styles.languageCard}
                        onSelect={onLanguageSelect}
                        data={lang}
                    />
                ))
            }
            <Button style={styles.saveBtn} onPress={() => { }} flex title={t('index.save')} />

        </View>
    )
}

const styles = StyleSheet.create({
    languagesContainer: {
        flex: 1,
        marginTop: 32,
        marginHorizontal: 32
    },
    languageCard: {
        marginVertical: 8
    },
    saveBtn: {
        marginTop: 'auto',
        marginBottom: 32
    }
})

export default EditLanguage;