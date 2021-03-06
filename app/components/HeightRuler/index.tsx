import React, { useState, createRef } from 'react'
import { StyleSheet, Image, View, Animated, NativeSyntheticEvent } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useFocusEffect } from '@react-navigation/native';
import { range } from 'lodash';
import { FlatList } from 'react-native-gesture-handler';

import Text from 'app/components/Text';
import TextInput from 'app/components/TextInput';

import { DEVICE_HEIGHT, DEVICE_WIDTH, useSize } from 'app/utils/UIHelper'
import { TextTypes } from 'app/types/entity/Texts';
import theme from 'app/theme/defaultTheme';
import ToggleButton from '../ToggleButton';
import { toFeet } from 'app/utils/OtherUtils';

const ITEM_HEIGHT = 15;

interface iProps {
    setHeight: (height: number) => void
}

const RulerValue: React.FC<{ item: number }> = (props) => {
    return (
        <Text style={styles.rulerText}>{props.item}</Text>
    )
}

const HeightRuler: React.FC<iProps> = (props) => {
    const { t } = useTranslation('Ruler')
    const [size, onLayout] = useSize();
    const [height, setHeight] = useState(160);
    const [unit, setUnit] = useState('feet')
    const data = range(100, 250)
    const [scrollY, _] = useState(new Animated.Value(0));
    const flatListRef = createRef<FlatList<number>>();
    const units = [{ shortCode: 'cm', title: 'CM' }, { shortCode: 'feet', title: 'Feet' }]

    useFocusEffect(() => {
        setTimeout(() => {
            setDefaultValue(height);
        }, 500);
    })


    const scrollListner: ((event: NativeSyntheticEvent<unknown>) => void) = (event) => { }

    const onMomentumScrollEnd = () => {
        const scrollOffset = (scrollY as any)._value;
        const focusIndex = Math.ceil((scrollOffset! / ITEM_HEIGHT));
        setHeight(data[focusIndex])
        if (props.setHeight) props.setHeight(data[focusIndex]);
    }

    const setDefaultValue = (value: number) => {
        const offset = (value - data[0]);
        const index = offset
        flatListRef.current?.scrollToIndex({ index });
    }

    const renderHeight = () => {
        if (unit == 'cm') {
            return `${height} cm`;
        } else if (unit == 'feet') {
            return toFeet(height);
        }
    }

    // @TODO
    const onScrollToIndexFailed: ((info: {
        index: number;
        highestMeasuredFrameIndex: number;
        averageItemLength: number;
    }) => void) = (error) => { }

    return (
        <View onLayout={onLayout}>
            <Text type={TextTypes.BODY} style={styles.title}>{t('index.title')}</Text>
            <ToggleButton options={units} onToggle={(unit) => setUnit(unit)} selectedOption={unit} style={styles.toggleButtonContainer} />
            <View style={[styles.rulerGraph]}>
                <Image resizeMode="stretch" style={[styles.markerLine, { width: size?.width - 40 || 0 }]} source={require('app/assets/images/dotted_line.png')} />
                <Image resizeMode="stretch" style={[styles.manVector,
                    // { marginLeft: size?.width * 0.2 || 0 }
                ]} source={require('app/assets/images/man_on_ruler.png')} />

                <Image source={require('app/assets/images/ruler.png')} style={styles.rulerImg} resizeMode="contain" />
                <View style={[styles.rulerList, { width: size?.width || 0 }]}>
                    <FlatList
                        ref={flatListRef}
                        showsVerticalScrollIndicator={false}
                        style={styles.rulerScrollableArea}
                        data={data}
                        renderItem={({ item, index }) => <RulerValue item={item} />}
                        keyExtractor={(index) => `ruler-${index}`}
                        automaticallyAdjustContentInsets
                        snapToInterval={ITEM_HEIGHT}
                        onMomentumScrollEnd={onMomentumScrollEnd}
                        onScrollToIndexFailed={onScrollToIndexFailed}

                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                            {
                                listener: scrollListner,
                                useNativeDriver: false
                            }
                        )}
                        contentContainerStyle={{ height: data.length * ITEM_HEIGHT }}
                    />
                    <View pointerEvents='none' style={styles.rulerIndicator}>
                        <Text style={styles.rulerIndicatorText}>{height}</Text>
                    </View>
                </View>
            </View>
            <TextInput value={renderHeight()} style={styles.heightInput} editable={false} />
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
    rulerGraph: {
    },
    rulerImg: {
        position: 'absolute',
        right: 0,
        height: DEVICE_HEIGHT * 0.4,
    },
    rulerList: {
        position: 'absolute',
        paddingTop: 16,
        paddingBottom: 2,
        height: DEVICE_HEIGHT * 0.4,
    },
    rulerScrollableArea: {
        marginTop: -10,
        paddingTop: 10,
    },
    rulerText: {
        fontSize: 8,
        color: theme.TEXT_COLOR_PRIMARY,
        height: ITEM_HEIGHT,
        marginLeft: 'auto',
        marginRight: 27
    },
    rulerIndicator: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: theme.BACKGROUND_PRIMARY,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'absolute',
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rulerIndicatorText: {
        color: theme.TEXT_COLOR_SECONDARY,
        fontSize: 10,
    },
    markerLine: {
        position: 'absolute',
        top: 15,
        height: 2
    },
    manVector: {
        position: 'absolute',
        marginTop: 17,
        height: (DEVICE_HEIGHT * 0.4) - 15
    },
    heightInput: {
        position: 'absolute',
        marginTop: (DEVICE_HEIGHT * 0.4) + 100,
        paddingVertical: 0,
        paddingHorizontal: 16,
        fontSize: 14,
        alignSelf: 'center',
        backgroundColor: 'transparent',
        fontFamily: 'Poppins-SemiBold'
    }
})

export default HeightRuler;