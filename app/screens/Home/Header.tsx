import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, GestureResponderEvent } from 'react-native'
import { composeInitialProps, useTranslation } from 'react-i18next';

import theme from 'app/theme/defaultTheme';
import Text from 'app/components/Text';
import { TextTypes, FontWeights } from 'app/types/entity/Texts';
import Icon from 'app/components/Icon'

interface IProps {
    onToggleDrawer: ((event: GestureResponderEvent) => void) | undefined
}

const Header: React.FC<IProps> = (props) => {
    const { t } = useTranslation('Home');
    return (
        <>
            <View style={styles.container}>

                {/* Background Decorator */}
                <View style={styles.decoBottomLeft} />
                <View style={styles.decoTopRight} />

                <TouchableOpacity style={styles.welcome} onPress={props.onToggleDrawer}>
                    <Text type={TextTypes.TITLE} weight={FontWeights.BOLD} style={styles.title}>{`${t('index.gm')}\nRehan`}</Text>
                    <Icon name="hamburger" style={styles.propic} />
                </TouchableOpacity>

                {/* Weight meta data */}
                <View style={[styles.card, styles.bmiCard]}>
                    <Image source={require('app/assets/images/home_page_card_background.png')} style={styles.cardBackgroundImage} resizeMode="contain" />
                    <View style={styles.cardIcon}>
                        <Icon name="bmi" size={30} color={theme.BMI_CARD_BACKGROUND} />
                    </View>
                    <View>
                        <Text type={TextTypes.BODY} style={styles.cardTitle}>{t('index.bmi')}</Text>
                        <Text type={TextTypes.TITLE} style={styles.cardTitle}>25.0</Text>
                    </View>
                </View>

                <View style={[styles.card, styles.caloryCard]}>
                    <Image source={require('app/assets/images/home_page_card_background.png')} style={styles.cardBackgroundImage} resizeMode="contain" />
                    <View style={styles.cardIcon}>
                        <Icon name="grain" size={30} color={theme.BMI_CARD_BACKGROUND} />
                    </View>
                    <View>
                        <Text type={TextTypes.BODY} style={styles.cardTitle}>{t('index.dailyCaloryCount')}</Text>
                        <Text type={TextTypes.TITLE} weight={FontWeights.BOLD} style={styles.cardTitle}>2500</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.BACKGROUND_PRIMARY,
        paddingHorizontal: 32,
        paddingTop: 16,
        paddingBottom: 16,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    decoBottomLeft: {
        position: 'absolute',
        left: 10,
        bottom: 10,
        width: 72,
        height: 72,
        borderRadius: 72 / 2,
        backgroundColor: `#63D25D`
    },
    decoTopRight: {
        position: 'absolute',
        right: 10,
        top: 80,
        width: 72,
        height: 72,
        borderRadius: 72 / 2,
        backgroundColor: `#63D25D`
    },
    welcome: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24
    },
    title: {
        color: theme.TEXT_COLOR_SECONDARY
    },
    propic: {
        fontSize: 44,
        color: theme.TEXT_COLOR_SECONDARY
    },
    card: {
        height: 90,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    cardBackgroundImage: {
        position: 'absolute',
        right: 20,
        width: 60
    },
    cardIcon: {
        width: 52,
        height: 52,
        borderRadius: 52 / 2,
        backgroundColor: theme.BACKGROUND_SECONDARY,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 24
    },
    bmiCard: {
        backgroundColor: theme.BMI_CARD_BACKGROUND
    },
    caloryCard: {
        backgroundColor: theme.CALORY_CARD_BACKGROUND
    },
    cardTitle: {
        color: theme.TEXT_COLOR_SECONDARY
    }
})

export default Header;
