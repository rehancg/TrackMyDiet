import { Dimensions, LayoutChangeEvent } from 'react-native';
import { useState, useCallback } from 'react';

export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const DEVICE_WIDTH = Dimensions.get('window').width;

export const useSize = (): [
    {
        height: number;
        width: number;
    },
    (event: LayoutChangeEvent) => void
] => {
    const [size, setSize] = useState<{
        height: number;
        width: number;
    } | null>(null);

    const onLayout = useCallback((event: LayoutChangeEvent) => {
        const { width, height } = event.nativeEvent.layout;
        setSize({ width, height });
    }, []);

    return [size!, onLayout];
};