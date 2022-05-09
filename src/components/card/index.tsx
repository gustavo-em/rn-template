import React from 'react'
import { Card, Container, TextCard } from './style'
import { colors } from '../../colors/index';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const CardComponent = ({children})=>{
    return (
        <>
            <Card start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={[colors.azul_100, 'transparent']}>
                <Icon style={{marginHorizontal: 10}} name='map-marked-alt' size={30}></Icon><TextCard>{children}</TextCard>
            </Card>
        </>
    )
}