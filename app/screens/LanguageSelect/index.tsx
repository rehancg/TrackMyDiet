import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import ViewWrapper from 'app/components/ViewWrapper'
import Text from 'app/components/Text';
import Button from 'app/components/Button';
import theme from 'app/theme/defaultTheme'
import { TextTypes, FontWeights } from 'app/types/entity/Texts';
import { DEVICE_HEIGHT } from 'app/utils/UIHelper';
import LanguageCard from './LanguageCard';
import { Languages } from 'app/constants/languages';
import { useTranslation } from 'react-i18next';
import NavigationUtils from 'app/utils/NavigationUtils';
import { useDispatch } from 'react-redux';
import thunks from 'app/thunks';



const LanguageSelect: React.FC = () => {
    const [selectedLang, setSelectedLang] = useState('en'); // Default lang en -> id = 1
    const { t } = useTranslation('LanguageSelect');
    const dispatch = useDispatch();

    const onClickNext = () => {
        NavigationUtils.navigate('RequestOTPScreen');
    }

    const onLanguageSelect = (lang: string) => {
        setSelectedLang(lang)
        dispatch(thunks.changeLanguage(lang))
    }

    return (
        <ViewWrapper isReady={true} withAnimation withSafeAreaView>
            <Text type={TextTypes.TITLE} style={styles.title}>{t('index.title_1')}
                <Text type={TextTypes.TITLE} weight={FontWeights.BOLD}>{` ${t('index.title_2')}`}</Text>
            </Text>

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
            </View>

            {/* Continue button */}
            <Button title={t('index.continue')} onPress={onClickNext} flex style={styles.footerButton} />
        </ViewWrapper>
    )
}

const styles = StyleSheet.create({
    title: {
        marginTop: DEVICE_HEIGHT / 8,
        color: theme.TEXT_COLOR_PRIMARY,
        textAlign: 'center',
        marginHorizontal: 32,
    },
    languagesContainer: {
        marginTop: 32,
        marginHorizontal: 32
    },
    languageCard: {
        marginVertical: 8
    },
    footerButton: {
        marginTop: 'auto',
        marginBottom: 50,
        marginHorizontal: 32
    }
})

export default LanguageSelect;