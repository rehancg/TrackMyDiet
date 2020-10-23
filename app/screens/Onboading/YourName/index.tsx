import React from 'react'

import Text from 'app/components/Text';
import TextInput from 'app/components/TextInput';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { TextTypes, FontWeights } from 'app/types/entity/Texts';
import theme from 'app/theme/defaultTheme';
import { useTranslation } from 'react-i18next';
import { PickImage } from 'app/utils/ImagePickerUtils';

interface iProps {
    setName: (text: string) => void,
    name: string
}

const YourName: React.FC<iProps> = (props) => {
    const { t } = useTranslation('Onboading')
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text type={TextTypes.TITLE} style={styles.title}>{t('name.title')}</Text>

                {/* Select profile pic */}
                <TouchableOpacity style={styles.proPic} onPress={PickImage}>

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
    proPic: {
        marginTop: 48,
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