import theme from 'app/theme/defaultTheme';
import React, { useEffect } from 'react';
import { Modal, StyleSheet, View, TouchableOpacity, GestureResponderEvent, StatusBar, Image } from 'react-native';
import Text from 'app/components/Text';
import { TextTypes } from 'app/types/entity/Texts';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'app/components/Icon';
import NavigationUtils from 'app/utils/NavigationUtils';

interface IProps {
    isVisible: boolean,
    onToggleDrawer: () => void | ((event: GestureResponderEvent) => void) | undefined
}

const NavigationDrawerModal: React.FC<IProps> = (props) => {

    useEffect(() => {
        if (props.isVisible) {
            StatusBar.setHidden(true)
        } else {
            StatusBar.setHidden(false)
        }
    }, [props.isVisible])

    const navigateToScreen = (screen: string) => {
        props.onToggleDrawer();
        NavigationUtils.navigate(screen);
    }

    return (
        <Modal visible={props.isVisible} animationType="fade" transparent={true}>
            <View style={[styles.modal, styles.container]}>
                <SafeAreaView style={styles.flex}>
                    <TouchableOpacity onPress={props.onToggleDrawer} hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }} style={styles.closeIconContainer}>
                        <Icon name="close" style={styles.closeIcon} />
                    </TouchableOpacity>
                    <View style={styles.content}>
                        <TouchableOpacity onPress={props.onToggleDrawer} style={[styles.titleContainer, styles.selectedTitle]}>
                            <Text type={TextTypes.HEADING} style={[styles.text]}>HOME</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.titleContainer} onPress={() => { navigateToScreen('CustomMealPlanScreen') }}>
                            <Text type={TextTypes.HEADING} style={styles.text}>CUSTOM PLAN</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.titleContainer} onPress={() => { navigateToScreen('FeedScreen') }}>
                            <Text type={TextTypes.HEADING} style={styles.text}>JOURNAL</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.titleContainer} onPress={() => { navigateToScreen('ProfileScreen') }}>
                            <Text type={TextTypes.HEADING} style={styles.text}>SETTINGS</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.footer}>
                        <Text type={TextTypes.PARAGRAPH} style={styles.text}>v1.0.1</Text>
                        <Text type={TextTypes.PARAGRAPH} style={styles.text}>Track My Diet</Text>
                    </View>
                </SafeAreaView>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: `${theme.BACKGROUND_INVERT}F2`
    },
    modal: {
        margin: 0,
        padding: 0
    },
    text: {
        color: theme.TEXT_COLOR_SECONDARY,
    },
    selectedTitle: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.TEXT_COLOR_SECONDARY,
        paddingHorizontal: 32,
        paddingVertical: 8,
        marginBottom: 8
    },
    titleContainer: {
        paddingVertical: 16
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 32,
        width: '100%',
        paddingHorizontal: 32,
        justifyContent: 'space-between',
    },
    closeIconContainer: {
        position: 'absolute',
        top: 32,
        left: 20,
    },
    closeIcon: {
        fontSize: 24,
        color: theme.TEXT_COLOR_SECONDARY
    }
})

export default NavigationDrawerModal;