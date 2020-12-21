import React, { memo, createRef, useState, useEffect } from 'react'
import { FlatList, StyleSheet, View, Image, Platform, ScrollView } from 'react-native'
import {
    WheelPicker
} from "react-native-wheel-picker-android";
import { range } from 'lodash'

import { useSize } from 'app/utils/UIHelper';
import theme from 'app/theme/defaultTheme';
import { useFocusEffect } from '@react-navigation/native';
import AgeList from 'app/constants/age';

interface IProps {
    defaultAge: number,
    onChangeAge: (age: number) => void
}

const AgeSpinner: React.FC<IProps> = (props) => {
    const flatListRef = createRef<FlatList<number>>();
    const [size, onLayout] = useSize();
    const [selectedAge, setSelectedAge] = useState(0);

    useEffect(() => {
        // if (props.defaultAge)
        setTimeout(() => {
            setSelectedAge(10);
        }, 500);
    }, [])

    return (
        <>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={{ flexGrow: 1 }} onLayout={onLayout}>
                <View style={{ flex: 1 }}>
                    {/* @ts-ignore */}
                    <WheelPicker
                        style={{ height: size?.height || 0, marginTop: 36 }}
                        data={AgeList}
                        onItemSelected={(age) => setSelectedAge(age)}
                        hideIndicator={true}
                        selectedItem={selectedAge}
                        selectedItemTextFontFamily='Poppins-SemiBold'
                        selectedItemTextSize={40}
                        selectedItemTextColor={theme.TEXT_COLOR_TERTIARY}
                        itemTextSize={40}
                        // @ts-ignore
                        itemStyle={styles.ageRowiOS}
                    />
                </View>
            </ScrollView>

            {/* Selection indicator - Left */}
            {
                Platform.OS == "android" && (
                    <>
                        <Image style={[styles.leftIndicator, { top: 40 * 3 + 45 }]} source={require('app/assets/images/picker_indicator.png')} />
                        <Image style={[styles.rightIndicator, { top: 40 * 3 + 45 }]} source={require('app/assets/images/picker_indicator_right.png')} />
                    </>
                )
            }

        </>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    leftIndicator: {
        position: 'absolute',
        left: 0
    },
    rightIndicator: {
        position: 'absolute',
        right: 0,
    },
    ageRowiOS: {
        fontSize: 50,
        fontFamily: 'Poppins-Medium',
        color: theme.TEXT_COLOR_TERTIARY
    }
})

export default memo(AgeSpinner);