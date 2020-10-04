import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import theme from 'app/theme/defaultTheme';
import { IState } from 'app/types/state';


const CustomLoader: React.FC = () => {
    const isVisible = useSelector<IState>(state => state.loader.isVisible) as boolean;
    return (
        <Modal
            transparent={true}
            animationType={"fade"}
            onRequestClose={() => { }}
            visible={isVisible}
        >
            <View style={styles.modalContent}>
                <ActivityIndicator size="large" color={theme.BACKGROUND_SECONDARY} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.6)"
    }
})

export default CustomLoader;