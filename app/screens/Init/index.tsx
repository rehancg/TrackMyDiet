import React, { useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import theme from 'app/theme/defaultTheme';
import { IState } from 'app/types/state';
import { IUserState } from 'app/types/state/user';
import NavigationUtils from 'app/utils/NavigationUtils';
import { setApiToken } from 'app/api/ApiBuilder';
import { getTokens } from 'app/utils/StorageUtils';

const Init: React.FC = () => {

    const loggedInUser = useSelector<IState, IUserState>(state => state.loggedInUser);

    useEffect(() => {
        setTimeout(() => {
            if (loggedInUser.id && loggedInUser.calory_requirement) {
                setTokens()
                NavigationUtils.navigate('Home')
            } else if (loggedInUser.id && !loggedInUser.calory_requirement) {
                setTokens()
                NavigationUtils.navigate('OnBoading')
            } else {
                NavigationUtils.navigate('Login')
            }
        }, 500);
    }, [])

    const setTokens = async () => {
        const { accessToken } = await getTokens();
        setApiToken(accessToken);
    }

    return (
        <View style={styles.container}>
            <ActivityIndicator color={theme.BACKGROUND_PRIMARY} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Init;