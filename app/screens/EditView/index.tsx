import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import ViewWrapper from 'app/components/ViewWrapper';
import theme from 'app/theme/defaultTheme';
import Button from 'app/components/Button';
import { useTranslation } from 'react-i18next';
import { HomeRootStackParamList } from 'app/navigation/HomeNavigator';


type IScreenRouteProp = RouteProp<HomeRootStackParamList, 'EditProfileScreen'>;


interface IProps {
    children: React.ReactNode
}

const EditView: React.FC<IProps> = (props) => {
    const { t } = useTranslation('App')
    const navigation = useNavigation();
    const route = useRoute<IScreenRouteProp>()

    useEffect(() => {
        navigation.setOptions({
            title: route.params.title
        })
    }, [])

    return (
        <ViewWrapper withoutScrollView isReady={true} withInsetsBottom withAnimation withSafeAreaView safeAreaBackgroundColor={theme.BACKGROUND_SECONDARY} barStyle={theme.BAR_STYLE_DEFAULT} style={styles.container}>
            {route.params.Component}
        </ViewWrapper>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default EditView;