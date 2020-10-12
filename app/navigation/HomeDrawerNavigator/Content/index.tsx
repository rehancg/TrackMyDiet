import React from 'react';
import { Image, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import Text from 'app/components/Text';
import { TextTypes } from 'app/types/entity/Texts';
import theme from 'app/theme/defaultTheme';
import { DEVICE_HEIGHT } from 'app/utils/UIHelper';
import NavigationUtils from 'app/utils/NavigationUtils';

const DrawerContent: React.FC = () => {

    const handleOnClickMenuItem = (key: string) => {
        console.log("Navigate ", key)
        NavigationUtils.navigate(key);
        NavigationUtils.closeDrawer();
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.titleContainer}>
                <Image source={require('app/assets/images/strawberry.jpg')} resizeMode="cover" style={styles.proPic} />
                <Text type={TextTypes.SUB_TITLE} style={styles.title}>Rehan Chanaka</Text>
                <Text type={TextTypes.BODY} style={styles.subTitle}>0711676691</Text>
            </View>
            {/* Menus */}
            <View style={styles.menuContainer}>
                <TouchableOpacity onPress={() => handleOnClickMenuItem('HomeScreen')}>
                    <Text style={styles.menuItemTitle} type={TextTypes.SUB_TITLE}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOnClickMenuItem('CustomMealPlanScreen')}>
                    <Text style={styles.menuItemTitle} type={TextTypes.SUB_TITLE}>Custom Plan</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOnClickMenuItem('CustomMealPlanScreen')}>
                    <Text style={styles.menuItemTitle} type={TextTypes.SUB_TITLE}>Track Today</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOnClickMenuItem('FeedScreen')}>
                    <Text style={styles.menuItemTitle} type={TextTypes.SUB_TITLE}>Journal</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOnClickMenuItem('ProfileScreen')}>
                    <Text style={styles.menuItemTitle} type={TextTypes.SUB_TITLE}>Settings</Text>
                </TouchableOpacity>

            </View>

            <Text style={styles.logout} type={TextTypes.BODY}>Log out</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer: {
        marginHorizontal: 32,
        marginTop: DEVICE_HEIGHT * 0.1
    },
    proPic: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        marginBottom: 16
    },
    title: {
        fontWeight: '700',
        color: theme.TEXT_COLOR_DEFAULT
    },
    subTitle: {
        color: theme.TEXT_COLOR_DEFAULT
    },
    menuContainer: {
        marginTop: 48,
        marginHorizontal: 32
    },
    menuItemTitle: {
        paddingVertical: 16,
        fontWeight: '400',
        color: theme.TEXT_COLOR_DEFAULT
    },
    logout: {
        marginTop: 'auto',
        color: theme.TEXT_COLOR_DEFAULT,
        marginHorizontal: 32,
        fontWeight: '400',
        marginBottom: 24
    }
})

export default DrawerContent;