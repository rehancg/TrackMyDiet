import React from 'react'
import { useTranslation } from 'react-i18next';

import Text from 'app/components/Text';
import TextInput from 'app/components/TextInput';
import { StyleSheet, View } from 'react-native';
import { TextTypes, FontWeights } from 'app/types/entity/Texts';
import theme from 'app/theme/defaultTheme';
import GenderCard from './GenderCard';
import { Gender } from 'app/constants/gender';

interface IProps {
    onSelect: (id: number) => void,
    selectedGender: number
}

const SelectGender: React.FC<IProps> = (props) => {
    const { t } = useTranslation('Onboading')

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text type={TextTypes.TITLE} style={styles.title}>{t('gender.title')}</Text>

                <View style={styles.genderCardsContainer}>
                    <GenderCard title={t('gender.male')} id={Gender.MALE} onSelect={props.onSelect} isSelected={props.selectedGender == Gender.MALE} image={require('app/assets/images/male.png')} style={styles.genderCard} />
                    <GenderCard title={t('gender.female')} id={Gender.FEMALE} onSelect={props.onSelect} isSelected={props.selectedGender == Gender.FEMALE} image={require('app/assets/images/female.png')} style={styles.genderCard} />
                </View>
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
    genderCard: {
        marginVertical: 8
    },
    genderCardsContainer: {
        marginTop: 48
    }
})

export default SelectGender;