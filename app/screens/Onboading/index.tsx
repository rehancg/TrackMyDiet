import React, { useState, createRef } from 'react';
import { StyleSheet, View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { useTranslation } from 'react-i18next';

import ProgressBar from 'app/components/ProgressBar';
import ViewWrapper from 'app/components/ViewWrapper';
import Button from 'app/components/Button';
import { ButtonTypes } from 'app/types/entity/Button';
import YourName from './YourName';
import SelectGender from './SelectGender';
import { Gender } from 'app/constants/gender';
import Text from 'app/components/Text';
import { TextTypes } from 'app/types/entity/Texts';
import SetAge from './SetAge';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from 'app/utils/UIHelper';
import SetHeight from './SetHeight';
import SetWeight from './SetWeight';
import SelectGoal from './SelectGoal';
import SelectDietType from './SelectDietType';
import SelectActivityLevel from './SelectActivityLevel';
import NavigationUtils from 'app/utils/NavigationUtils';

const numOfPages = 8;

const Onboading: React.FC = (props) => {
    const viewPagerRef = createRef<ViewPager>();
    const { t } = useTranslation('Onboading');
    const [gender, setGender] = useState(Gender.MALE);
    const [age, setAge] = useState(21);
    const [goal, setGoal] = useState(2);
    const [type, setType] = useState(2);
    const [activityLevel, setActivityLevel] = useState(2);
    const [page, setPage] = useState(0);

    const navigateNext = () => {
        if (page == (numOfPages - 1)) {
            NavigationUtils.resetToScreen('Home');
        } else
            viewPagerRef.current?.setPage(page + 1)
    }

    const navigateBack = () => {
        if (page > 0)
            viewPagerRef.current?.setPage(page - 1)
    }

    const calculateProgress = () => {
        let percentage = (page + 1) / numOfPages * 100
        return Math.round(percentage);
    }

    return (
        <ViewWrapper isReady={true} withAnimation withSafeAreaView style={styles.container} >
            <ProgressBar progress={calculateProgress()} style={styles.progressBar} />
            <Text style={styles.progressText} type={TextTypes.PARAGRAPH}>{`${t('index.progressPrefix')} ${page + 1}/${numOfPages}`}</Text>
            <ViewPager ref={viewPagerRef} style={styles.viewPager} initialPage={0} scrollEnabled={false} onPageSelected={(e) => setPage(e.nativeEvent.position)}>
                <View key={'onbording-name'}>
                    <YourName />
                </View>

                <View key={'onbording-gender'}>
                    <SelectGender selectedGender={gender} onSelect={(id) => setGender(id)} />
                </View>

                <View key={'onbording-age'}>
                    <SetAge age={age} onChangeAge={age => setAge(age)} />
                </View>

                <View key={'onbording-height'}>
                    <SetHeight />
                </View>

                <View key={'onbording-weight'}>
                    <SetWeight />
                </View>

                <View key={'onbording-goal'}>
                    <SelectGoal onSelect={setGoal} goal={goal} />
                </View>

                <View key={'onbording-type'}>
                    <SelectDietType onSelect={setType} value={type} />
                </View>

                <View key={'onbording-activity-level'}>
                    <SelectActivityLevel onSelect={setActivityLevel} value={activityLevel} />
                </View>
            </ViewPager>

            {/* Action buttons container */}
            <View style={styles.actionButtons}>
                <Button type={ButtonTypes.PRIMARY} title={t('index.next')} onPress={navigateNext} flex style={styles.actionButton} />
                {
                    page > 0 ? <Button type={ButtonTypes.ACTION} title={t('index.previous')} onPress={navigateBack} flex style={styles.actionButton} /> : <View style={styles.buttonSpacer} />
                }
            </View>

        </ViewWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
    progressBar: {
        marginHorizontal: 32
    },
    progressText: {
        textAlign: 'center',
        marginTop: 8
    },
    viewPager: {
        // flex: 1,
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT * 0.73,
    },
    actionButtons: {
        marginTop: 'auto',
        marginHorizontal: 32
    },
    actionButton: {
        marginVertical: 8
    },
    buttonSpacer: {
        marginVertical: 8,
        height: 32
    }
})

export default Onboading;