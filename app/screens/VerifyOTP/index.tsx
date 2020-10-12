import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'

import ViewWrapper from 'app/components/ViewWrapper';
import Text from 'app/components/Text';
import Button from 'app/components/Button';
import { TextTypes, FontWeights } from 'app/types/entity/Texts';
import { DEVICE_HEIGHT, DEVICE_WIDTH, useSize } from 'app/utils/UIHelper';
import theme from 'app/theme/defaultTheme';
import { useTranslation } from 'react-i18next';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { LoginStackParamList } from 'app/navigation/LoginNavigator';
import { useDispatch } from 'react-redux';
import thunks from 'app/thunks';
import NavigationUtils from 'app/utils/NavigationUtils';

type IScreenRouteProp = RouteProp<LoginStackParamList, 'VerifyOTPScreen'>;

const VerifyOTP: React.FC = () => {
    const { t } = useTranslation('VerifyOTP');
    const dispatch = useDispatch();
    const [size, onLayout] = useSize();
    const route = useRoute<IScreenRouteProp>()
    const [code, setCode] = useState('');
    const [showOtpResendOption, setShowOtpResendOption] = useState(false);
    let interval: NodeJS.Timeout;

    const onClickNext = () => {
        dispatch(thunks.login.verifyOtp(route.params.telNo, route.params.data.referenceNo, parseInt(code)));
    }

    const onCodeFilled = (code: string) => {
        setCode(code);
    }

    const handleResendOtp = () => {
        dispatch(thunks.login.requestOtp(route.params.telNo));
        resetOtpResendOption();
    }

    const resetOtpResendOption = () => {
        setShowOtpResendOption(false);
        interval = setInterval(() => {
            setShowOtpResendOption(true);
        }, 1000 * 15)
    }

    useEffect(() => {
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    }, [])

    useEffect(() => {

    }, [showOtpResendOption])

    useEffect(() => {
        resetOtpResendOption();
    }, [])

    return (
        <ViewWrapper isReady={true} withAnimation withSafeAreaView withKeyboardAvoidingView>
            <Text type={TextTypes.TITLE} style={styles.title}>{t('index.title')}</Text>
            <Image source={require('app/assets/images/otp_request.png')} style={styles.otpImage} resizeMode="stretch" />
            <Text type={TextTypes.BODY} style={styles.otpTagline}>{t('index.desc')}
                <Text type={TextTypes.BODY} weight={FontWeights.BOLD}>{` ${route.params.telNo}`}</Text>
            </Text>

            <View style={styles.otpContainer} onLayout={onLayout}>
                <OTPInputView
                    pinCount={4}
                    autoFocusOnLoad
                    style={{ width: size?.width || 0, height: 50 }}
                    codeInputFieldStyle={styles.otpInput}
                    onCodeFilled={onCodeFilled}
                />
            </View>

            <View style={styles.otpResendTextsContainer}>
                <Text type={TextTypes.BODY} style={styles.otpResend}>{t('index.dontRecieve')}

                </Text>
                {
                    showOtpResendOption && (
                        <TouchableOpacity onPress={handleResendOtp} style={styles.otpResendButtonContainer}>
                            <Text type={TextTypes.BODY} style={styles.otpResendButtonText}> {t('index.resendOTP')}</Text>
                        </TouchableOpacity>
                    )
                }

            </View>

            {/* Continue button */}
            <Button disabled={code.length !== 4} title={t('index.continue')} onPress={onClickNext} flex style={styles.footerButton} />

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
    otpResendTextsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    otpResendButtonContainer: {
        alignSelf: 'flex-end'
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