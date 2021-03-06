import React, { useState, createRef } from 'react'
import { StyleSheet, Image, View, Animated, NativeSyntheticEvent, FlatList } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useFocusEffect } from '@react-navigation/native';
import { Slider } from "@miblanchard/react-native-slider";


import Text from 'app/components/Text';
import TextInput from 'app/components/TextInput';

import { DEVICE_HEIGHT, DEVICE_WIDTH, useSize } from 'app/utils/UIHelper'
import { TextTypes } from 'app/types/entity/Texts';
import theme from 'app/theme/defaultTheme';
import ToggleButton from '../ToggleButton';
import { ScrollView } from 'react-native-gesture-handler';

interface iProps {
    setWeight: (value: number) => void
}

const WeightSetter: React.FC<iProps> = (props) => {
    const { t } = useTranslation('Scale')
    const [size, onLayout] = useSize();
    const [weight, setWeight] = useState(60);
    const [unit, setUnit] = useState('kg')
    const units = [{ shortCode: 'kg', title: 'KG' }, { shortCode: 'lbs', title: 'LBS' }]

    const onChangeSliderValue = (value: any) => {
        setWeight(value[0])
        if (props.setWeight) {
            const calculatedValue = unit == 'lbs' ? (value[0] * 0.453592).toFixed(2) : value[0];
            props.setWeight(calculatedValue);
        }
    }


    return (
        <View onLayout={onLayout}>
            <Text type={TextTypes.BODY} style={styles.title}>{t('index.title')}</Text>
            <ToggleButton options={units} onToggle={(unit) => setUnit(unit)} selectedOption={unit} style={styles.toggleButtonContainer} />

            <View style={styles.vectorContainer}>
                <Image resizeMode="stretch" style={[styles.manVector]} source={require('app/assets/images/man_on_scale.png')} />
            </View>

            <TextInput value={` ${weight.toFixed(1)} ${unit}`} style={styles.heightInput} editable={false} />
            <Slider
                containerStyle={[styles.slider, { width: size?.width || 0 }]}
                value={weight}
                onValueChange={onChangeSliderValue}
                maximumTrackTintColor={theme.SLIDER_BACKGROUND}
                minimumTrackTintColor={theme.SLIDER_BACKGROUND}
                maximumValue={220}
                minimumValue={40}
                step={0.5}
                thumbStyle={styles.thumbStyle}
                trackStyle={styles.trackStyle}
                thumbTouchSize={styles.thumbTouchSize}
            />
            <View style={styles.sliderX}>
                <Text>40{unit}</Text>
                <Text>220{unit}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        textAlign: 'center'
    },
    toggleButtonContainer: {
        marginVertical: 16
    },
    vectorContainer: {
        marginTop: 8
    },
    manVector: {
        position: 'absolute',
        height: (DEVICE_HEIGHT * 0.35),
        alignSelf: 'center'
    },
    heightInput: {
        position: 'absolute',
        marginTop: (DEVICE_HEIGHT * 0.35) + 90,
        paddingVertical: 0,
        paddingHorizontal: 16,
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'center',
        backgroundColor: theme.BACKGROUND_PRIMARY,
        color: theme.TEXT_COLOR_SECONDARY
    },
    slider: {
        // position: 'absolute',
        marginTop: (DEVICE_HEIGHT * 0.35) + 40,
    },
    thumbStyle: {
        width: 24, height: 24, backgroundColor: theme.SLIDER_THUMB, borderRadius: 12
    },
    trackStyle: {
        height: 8, borderRadius: 4, backgroundColor: theme.SLIDER_BACKGROUND
    },
    thumbTouchSize: {
        width: 40,
        height: 40
    },
    sliderX: {
        marginTop: -10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scrollWrapper: {
        flexGrow: 1
    }
})

export default WeightSetter;