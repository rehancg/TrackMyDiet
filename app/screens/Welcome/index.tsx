import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

import Text from 'app/components/Text'
import Button from 'app/components/Button'
import ViewWrapper from 'app/components/ViewWrapper';

import { TextTypes } from 'app/types/entity/TextInput';
import theme from 'app/theme/defaultTheme';
import { DEVICE_HEIGHT } from 'app/utils/UIHelper';
import { ButtonTypes } from 'app/types/entity/Button';

const Splash: React.FC = () => {

    const [isReady, setIsReady] = useState(false);
    const { t } = useTranslation('Welcome');

    useEffect(() => {
        setTimeout(() => {
            setIsReady(true)
        }, 500);
    }, [])

    const onClickNext = () => { }

    return (
        <ViewWrapper isReady={isReady} withAnimation withSafeAreaView style={styles.container} safeAreaBackgroundColor={theme.BACKGROUND_PRIMARY} loaderColor={theme.ACTIVITY_INDICATOR_SECONDARY}>
            {/* Text Container */}
            <View style={styles.textContainer}>
                <Text type={TextTypes.HEADING} style={styles.title}>{t('index.title')}</Text>
                <Text type={TextTypes.BODY} style={styles.tagline}>{t('index.tagline')}</Text>
                <Button title={t('index.getStarted')} type={ButtonTypes.SECONDARARY} onPress={onClickNext} style={styles.nextButton} />
            </View>
        </ViewWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_PRIMARY,
        marginHorizontal: 32
    },
    textContainer: {
        position: 'absolute',
        top: DEVICE_HEIGHT * 0.6
    },
    title: {
        color: theme.TEXT_COLOR_SECONDARY
    },
    tagline: {
        marginTop: 8,
        color: theme.TEXT_COLOR_SECONDARY
    },
    nextButton: {
        marginTop: 16
    }
})

export default Splash;