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

const numOfPages = 3;

const Onboading: React.FC = (props) => {
    const viewPagerRef = createRef<ViewPager>();
    const { t } = useTranslation('Onboading');
    const [gender, setGender] = useState(Gender.MALE);
    const [age, setAge] = useState(21);
    const [page, setPage] = useState(0);

    const navigateNext = () => {

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
                <View>
                    <YourName key={'name'} />
                </View>

                <View>
                    <SelectGender key={'gender'} selectedGender={gender} onSelect={(id) => setGender(id)} />
                </View>

                <View>
                    <SetAge key={'age'} age={age} onChangeAge={age => setAge(age)} />
                </View>
            </ViewPager>

            {/* Action buttons container */}
            <View style={styles.actionButtons}>
                <Button type={ButtonTypes.PRIMARY} title={t('index.next')} onPress={navigateNext} flex style={styles.actionButton} />
                <Button type={ButtonTypes.ACTION} title={t('index.previous')} onPress={navigateBack} flex style={styles.actionButton} />
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
        height: DEVICE_HEIGHT * 0.7,
    },
    actionButtons: {
        marginTop: 'auto',
        marginHorizontal: 32
    },
    actionButton: {
        marginVertical: 8
    }
})

export default Onboading;