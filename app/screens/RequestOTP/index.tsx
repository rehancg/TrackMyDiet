import React, { createRef, useEffect, useState } from 'react';
import { StyleSheet, Image, TextInput, Platform, View } from 'react-native';

import ViewWrapper from 'app/components/ViewWrapper';
import Text from 'app/components/Text';
import MaskedTextInput from 'app/components/MaskedTextInput';
import Button from 'app/components/Button';
import { TextTypes, FontWeights } from 'app/types/entity/Texts';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from 'app/utils/UIHelper';
import theme from 'app/theme/defaultTheme';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import thunks from 'app/thunks';
import { IState } from 'app/types/state';

const RequestOTP: React.FC = () => {
    const dispatch = useDispatch();
    const isLoaderVisible = useSelector<IState>(state => state.loader.isVisible) as boolean;
    const { t } = useTranslation('RequestOTP');
    const [mobileNo, setMobileNo] = useState<string>('');
    const mobileNumMaskRef = createRef<TextInput>();

    const onClickNext = () => {
        dispatch(thunks.login.requestOtp(`0${mobileNo}`));
    }

    return (
        <ViewWrapper isReady={true} withAnimation withSafeAreaView withKeyboardAvoidingView>
            <Text type={TextTypes.TITLE} style={styles.title}>{t('index.title')}</Text>
            <Image source={require('app/assets/images/otp_request.png')} style={styles.otpImage} resizeMode="stretch" />
            <Text type={TextTypes.BODY} style={styles.otpTagline}>{t('index.desc_1')}
                <Text type={TextTypes.BODY} weight={FontWeights.BOLD}> {t('index.desc_2')}</Text>
                <Text type={TextTypes.BODY}> {t('index.desc_3')}</Text>
            </Text>

            <MaskedTextInput
                onChangeMaskedText={(formatted, extracted) => {
                    setMobileNo(extracted || '');
                }}
                refInput={mobileNumMaskRef}
                mask="(0[00]) [000] [00] [00]"
                placeholder="Mobile Number"
                style={styles.mobileNumberContainer}
                keyboardType="phone-pad" />

            {/* Continue button */}
            <Button
                title={t('index.continue')}
                onPress={onClickNext}
                flex
                disabled={mobileNo?.length != 9 || isLoaderVisible}
                style={styles.footerButton}
            />
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
    mobileNumberContainer: {
        marginHorizontal: 32,
        marginTop: 24
    },
    footerButton: {
        marginTop: 'auto',
        marginBottom: 50,
        marginHorizontal: 32
    }
})

export default RequestOTP;