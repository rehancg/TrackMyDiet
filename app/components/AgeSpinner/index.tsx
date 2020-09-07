import React, { memo, useState, createRef, useLayoutEffect, useEffect } from 'react'
import { FlatList, Animated, StyleSheet, View, NativeSyntheticEvent, Image, Platform } from 'react-native'
import { range } from 'lodash'

import { useSize } from 'app/utils/UIHelper';
import Text from 'app/components/Text';
import { FontWeights } from 'app/types/entity/Texts';
import theme from 'app/theme/defaultTheme';
import { useFocusEffect } from '@react-navigation/native';

const ITEM_HEIGHT = 75;

interface IDataRowProps {
    item: number,
    index: number,
    scrollY: Animated.Value,
    size: {
        height: number;
        width: number;
        x: number;
        y: number;
    }
}

const DataRow: React.FC<IDataRowProps> = (props) => {

    const { index } = props;
    const newIndex = index - 2;

    const inputRange = [
        (newIndex - 2) * ITEM_HEIGHT,
        (newIndex - 1) * ITEM_HEIGHT,
        newIndex * ITEM_HEIGHT,
        (newIndex + 1) * ITEM_HEIGHT,
        (newIndex + 2) * ITEM_HEIGHT,
    ]

    const fontSize = props.scrollY.interpolate({
        inputRange: inputRange,
        outputRange: [25, 40, 70, 40, 25],
        extrapolate: 'clamp',
    })

    const opacity = props.scrollY.interpolate({
        inputRange: inputRange,
        outputRange: [0.35, 0.65, 1, 0.65, 0.35],
        extrapolate: 'clamp',
    })

    const marginTop = props.scrollY.interpolate({
        inputRange: inputRange,
        outputRange: [-30, 0, 0, 0, 40],
        extrapolate: 'clamp',
    })

    return (
        <View style={styles.ageRow} >
            <Text animated weight={FontWeights.BOLD} style={{
                fontSize, opacity, marginTop, color: theme.TEXT_COLOR_TERTIARY
            }}>{props.item}</Text>
        </View>
    )
}

interface IProps {
    defaultAge: number,
    onChangeAge: (age: number) => void
}

const AgeSpinner: React.FC<IProps> = (props) => {
    const [scrollY, _] = useState(new Animated.Value(0));
    const [scrollOffset, setScrollOffset] = useState<{ contentOffset: { y: number } }>();
    const flatListRef = createRef<FlatList<number>>();
    const [size, onLayout] = useSize();
    const data = range(12, 100)

    useFocusEffect(() => {
        if (props.defaultAge)
            setTimeout(() => {
                setDefaultValue(props.defaultAge);
            }, 500);
    })

    const scrollListner: ((event: NativeSyntheticEvent<unknown>) => void) = (event) => {
        // setScrollOffset(event.nativeEvent as { contentOffset: { y: number } }) 
    }

    const onMomentumScrollEnd = () => {
        const scrollOffset = (scrollY as any)._value;
        // const scrollY = scrollOffset?.contentOffset.y;
        const focusIndex = (scrollOffset! / ITEM_HEIGHT) + 2;
        props.onChangeAge(data[focusIndex]);
    }

    const setDefaultValue = (value: number) => {
        const offset = (value - data[0]);
        const index = offset - 2
        flatListRef.current?.scrollToIndex({ index });
    }

    // @TODO
    const onScrollToIndexFailed: ((info: {
        index: number;
        highestMeasuredFrameIndex: number;
        averageItemLength: number;
    }) => void) = (error) => { }

    return (
        <>
            <View style={styles.container} onLayout={onLayout}>
                <FlatList
                    ref={flatListRef}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ index, item }) => <DataRow item={item} scrollY={scrollY} index={index} size={size} />}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        {
                            listener: scrollListner,
                            useNativeDriver: false
                        }
                    )}
                    ListHeaderComponent={null}
                    ListFooterComponent={null}
                    automaticallyAdjustContentInsets
                    snapToInterval={ITEM_HEIGHT}
                    keyExtractor={(index) => `age-${index}`}
                    onMomentumScrollEnd={onMomentumScrollEnd}
                    onScrollToIndexFailed={onScrollToIndexFailed}
                    contentContainerStyle={{ height: ITEM_HEIGHT * data.length }}
                />
            </View>

            {/* Selection indicator - Left */}
            <Image style={[styles.leftIndicator, { top: ((size?.height || 0) / 2) - (Platform.OS == "android" ? 20 : 0) }]} source={require('app/assets/images/picker_indicator.png')} />
            <Image style={[styles.rightIndicator, { top: ((size?.height || 0) / 2) - (Platform.OS == "android" ? 20 : 0) }]} source={require('app/assets/images/picker_indicator_right.png')} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: ITEM_HEIGHT * 5,
        alignSelf: 'center'
    },
    ageRow: {
        height: ITEM_HEIGHT,
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftIndicator: {
        position: 'absolute',
        left: 0
    },
    rightIndicator: {
        position: 'absolute',
        right: 0,
    }
})

export default memo(AgeSpinner);