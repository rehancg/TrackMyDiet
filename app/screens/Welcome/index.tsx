import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { useTranslation } from 'react-i18next';

import Text from 'app/components/Text'
import Button from 'app/components/Button'
import ViewWrapper from 'app/components/ViewWrapper';

import { TextTypes, FontWeights } from 'app/types/entity/Texts';
import theme from 'app/theme/defaultTheme';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from 'app/utils/UIHelper';
import { ButtonTypes } from 'app/types/entity/Button';
import NavigationUtils from 'app/utils/NavigationUtils';

const Splash: React.FC = () => {

    const [isReady, setIsReady] = useState(false);
    const { t } = useTranslation('Welcome');

    const onClickNext = () => {
        NavigationUtils.navigate('LanguageSelectScreen');
    }

    return (
        <ViewWrapper isReady={true} withAnimation withSafeAreaView style={styles.container} safeAreaBackgroundColor={theme.BACKGROUND_PRIMARY} loaderColor={theme.ACTIVITY_INDICATOR_SECONDARY} barStyle="light-content">
            <Image source={require('app/assets/images/background_welcome.png')} style={styles.backgroundImage} resizeMode="cover" />

            {/* Text Container */}
            <View style={styles.textContainer}>
                <Text type={TextTypes.HEADING} weight={FontWeights.BOLD} style={styles.title}>{t('index.title')}</Text>
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
    },
    backgroundImage: {
        position: 'absolute',
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT
    },
    textContainer: {
        position: 'absolute',
        top: DEVICE_HEIGHT * 0.6,
        marginHorizontal: 32,
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