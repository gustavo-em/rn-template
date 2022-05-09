import React from 'react'
import { Container, IconBack } from './styles'
import { Text } from 'react-native';

export const HeaderBack = ({navigation})=>{
    return (
        <>
            <Container>

                <IconBack onPress={()=>navigation.goBack()}></IconBack>
            </Container>
        </>
    )
}