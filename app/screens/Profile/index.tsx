import React, { memo, useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import ViewWrapper from 'app/components/ViewWrapper';
import theme from 'app/theme/defaultTheme';
import { DEVICE_HEIGHT } from 'app/utils/UIHelper';
import DisplayCard from './DisplayCard';
import Text from 'app/components/Text';
import { FontWeights } from 'app/types/entity/Texts';


const Profile: React.FC = () => {

    const [isEdit, setIsEdit] = useState(false);
    const appTranslate = useTranslation('App')

    const onClickEdit = (key: string) => {

    }

    return (
        <ViewWrapper isReady={true} withInsetsBottom withAnimation withSafeAreaView safeAreaBackgroundColor={theme.BACKGROUND_PRIMARY} barStyle={theme.BAR_STYLE_SECONDARY} style={styles.container}>


            {/* Header */}
            <View style={styles.header}>
                <Image style={styles.headerBackground} source={require('app/assets/images/foodDetailsBackground_left.png')} resizeMode="cover">
                </Image>

                <Image style={styles.proPic} resizeMode="cover" source={require('app/assets/images/strawberry.jpg')}>

                </Image>

                {/* Right action */}
                <TouchableOpacity style={styles.headerRightAction} hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }} onPress={() => setIsEdit(!isEdit)}>
                    <Text style={styles.headerRightActionText} weight={FontWeights.BOLD}>{isEdit ? appTranslate.t('save') : appTranslate.t('edit')}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <DisplayCard id="name" title="Name" value="Rehan Chanaka" onPress={onClickEdit} editMode={isEdit} />
                <DisplayCard id="lang" title="Language" value="En" onPress={onClickEdit} editMode={isEdit} />
                <DisplayCard id="gender" title="Gender" value="Male" onPress={onClickEdit} editMode={isEdit} />
                <DisplayCard id="age" title="Age" value={21} onPress={onClickEdit} editMode={isEdit} />
                <DisplayCard id="height" title="Height" value={`1.7m`} onPress={onClickEdit} editMode={isEdit} />
                <DisplayCard id="weight" title="Weight" value="50Kg" onPress={onClickEdit} editMode={isEdit} />
                <DisplayCard id="goal" title="Goal" value="Lose weight" onPress={onClickEdit} editMode={isEdit} />
                <DisplayCard id="dietType" title="Diet Type" value="Pescentarian" onPress={onClickEdit} editMode={isEdit} />
            </View>

        </ViewWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 36
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerRightAction: {
        position: 'absolute',
        right: 16,
        top: 8,
    },
    headerRightActionText: {
        color: theme.TEXT_COLOR_SECONDARY
    },
    headerBackground: {
        height: DEVICE_HEIGHT * 0.2,
        width: '100%',
        backgroundColor: theme.BACKGROUND_PRIMARY,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    proPic: {
        height: 130,
        width: 130,
        borderRadius: 130 / 2,
        borderWidth: 3,
        borderColor: theme.BACKGROUND_SECONDARY,
        backgroundColor: theme.BACKGROUND_SECONDARY,
        marginTop: -130 / 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.62,
        elevation: 4,
    },
    content: {
        paddingHorizontal: 32,
        paddingVertical: 16
    }
})

export default Profile;