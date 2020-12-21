import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import DataRow from './DataRow';
import DataRowWithThumb from './DataRowWithThumb'

import { useTranslation } from 'react-i18next';
import { IOptionCard } from 'app/types/entity/OptionCard';

interface IProps {
    value: number,
    onSelectCard: (id: number) => void,
    data: IOptionCard[],
    cardStyle?: ViewStyle
}

const CardOptionsList: React.FC<IProps> = (props) => {
    const { t } = useTranslation('DietMeta')
    return (
        <>
            {
                props.data.map((data) => (
                    data.image ? <DataRowWithThumb key={data.id} style={[styles.card, props.cardStyle || {}]} id={data.id} title={t(data.titleKey)} onSelect={props.onSelectCard} value={props.value} image={data.image} /> :
                        <DataRow key={data.id} style={[styles.card, props.cardStyle || {}]} id={data.id} title={t(data.titleKey)} onSelect={props.onSelectCard} value={props.value} tagLine={t(data.tagLineKey)} />
                ))
            }
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 8
    }
})

export default CardOptionsList;