import React, { useState } from 'react'

import Text from 'app/components/Text';
import TextInput from 'app/components/TextInput';
import { StyleSheet, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { TextTypes, FontWeights } from 'app/types/entity/Texts';
import theme from 'app/theme/defaultTheme';
import { useTranslation } from 'react-i18next';
import { PickImage } from 'app/utils/ImagePickerUtils';

interface iProps {
    setName: (text: string) => void,
    setAvator: (uri: string) => void,
    setUpdatingProPic: (isUpdating: boolean) => void,
    name: string,
    avator: string,
    updatingProPic: boolean
}

const YourName: React.FC<iProps> = (props) => {
    const { t } = useTranslation('Onboading');

    const onChangePropic = async () => {
        try {
            props.setUpdatingProPic(true)
            const uri = await PickImage();
            props.setAvator(uri)
            props.setUpdatingProPic(false)
        } catch (error) {
            props.setUpdatingProPic(false)
        }
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text type={TextTypes.TITLE} style={styles.title}>{t('name.title')}</Text>

                {/* Select profile pic */}
                <TouchableOpacity style={[styles.proPicContainer, styles.proPic]} onPress={onChangePropic}>
                    {
                        props.avator && !props.updatingProPic ? <Image style={styles.proPic} resizeMode="cover" source={{ uri: props.avator }} /> :
                            props.updatingProPic ? <ActivityIndicator style={{ ...StyleSheet.absoluteFillObject }} color={theme.ACTIVITY_INDICATOR_DEFAULT} /> : null
                    }
                </TouchableOpacity>

                {/* Name input */}
                <TextInput value={props.name} placeholder={t('name.inputPlaceholder')} style={styles.nameInput} onChangeText={(text) => props.setName(text)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: 32,
        marginHorizontal: 32,
    },
    title: {
        textAlign: 'center'
    },
    proPicContainer: {
        marginTop: 48,
    },
    proPic: {
        width: 100,
        height: 100,
        borderRadius: 200 / 2,
        alignSelf: 'center',
        backgroundColor: theme.TEXT_INPUT_PRIMARY_BACKGROUND_COLOR
    },
    nameInput: {
        marginTop: 32
    }
})

export default YourName;