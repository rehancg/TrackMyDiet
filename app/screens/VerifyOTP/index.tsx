import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'

import ViewWrapper from 'app/components/ViewWrapper';
import Text from 'app/components/Text';
import TextInput from 'app/components/TextInput';
import Button from 'app/components/Button';
import { TextTypes, FontWeights } from 'app/types/entity/Texts';
import { DEVICE_HEIGHT, DEVICE_WIDTH, useSize } from 'app/utils/UIHelper';
import theme from 'app/theme/defaultTheme';
import { useTranslation } from 'react-i18next';
import NavigationUtils from 'app/utils/NavigationUtils';

const VerifyOTP: React.FC = () => {
    const { t } = useTranslation('VerifyOTP');
    const [size, onLayout] = useSize();

    const onClickNext = () => {
        NavigationUtils.resetToScreen('OnBoading')
    }

    return (
        <ViewWrapper isReady={true} withAnimation withSafeAreaView withKeyboardAvoidingView>
            <Text type={TextTypes.TITLE} style={styles.title}>{t('index.title')}</Text>
            <Image source={require('app/assets/images/otp_request.png')} style={styles.otpImage} resizeMode="stretch" />
            <Text type={TextTypes.BODY} style={styles.otpTagline}>{t('index.desc')}
                <Text type={TextTypes.BODY} weight={FontWeights.BOLD}>{` 0712671822`}</Text>
            </Text>

            <View style={styles.otpContainer} onLayout={onLayout}>
                <OTPInputView
                    pinCount={4}
                    autoFocusOnLoad
                    style={{ width: size?.width || 0, height: 50 }}
                    codeInputFieldStyle={styles.otpInput}
                />
                {/* <TextInput maxLength={1} style={styles.otpInput} />
                <TextInput maxLength={1} style={styles.otpInput} />
                <TextInput maxLength={1} style={styles.otpInput} />
                <TextInput maxLength={1} style={styles.otpInput} /> */}
            </View>

            <Text type={TextTypes.BODY} style={styles.otpResend}>{t('index.dontRecieve')}
                <Text type={TextTypes.BODY} style={styles.otpResendButtonText}> {t('index.resendOTP')}</Text>
            </Text>

            {/* Continue button */}
            <Button title={t('index.continue')} onPress={onClickNext} flex style={styles.footerButton} />

        </ViewWrapper>
    )
}

const styles = StyleSheet.create({
    title: {
        marginTop: DEVICE_HEIGHT / 8,
        color: theme.TEXT_COLOR_PRIMARY,
        textAlign: 'center'
    },
    otpImage: {
        width: DEVICE_WIDTH * 0.6,
        height: DEVICE_HEIGHT * 0.35,
        alignSelf: 'center',
        marginTop: 32
    },
    otpTagline: {
        textAlign: 'center',
        marginTop: 24
    },
    otpContainer: {
        marginHorizontal: 48,
        marginTop: 16,
        flexDirection: 'row',
    },
    otpInput: {
        flex: 1,
        textAlign: 'center',
        color: theme.TEXT_INPUT_PRIMARY_TEXT_COLOR,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.TEXT_INPUT_PRIMARY_BORDER_COLOR,
        backgroundColor: theme.TEXT_INPUT_PRIMARY_BACKGROUND_COLOR,
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
    },
    otpResend: {
        textAlign: 'center',
        marginTop: 16,
    },
    otpResendButtonText: {
        color: theme.TEXT_COLOR_TERTIARY
    },
    footerButton: {
        marginTop: 'auto',
        marginBottom: 50,
        marginHorizontal: 32
    }
})

export default VerifyOTP;