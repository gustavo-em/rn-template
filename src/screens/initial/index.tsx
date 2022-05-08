import React from "react";
import { View } from "react-native";

import Logo from "../../assets/bg7.svg";
import { Card, Container, IconCard, Title, TitleCard } from "./style";
import { colors } from '../../colors/index';
import Icon from 'react-native-vector-icons/FontAwesome5';


export const Initial = ()=>{
    return(
        <>
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 16,
                    bottom: 0,
                }}
            >
                <Logo/>
            </View>
            <Container>
                <Title>
                    Funcionalidades
                </Title>
                <Card  start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={[colors.azul_100, 'transparent']}>
                    <TitleCard>Titulo</TitleCard>
                    <IconCard></IconCard>
                </Card>
                <Card  start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={[colors.azul_100, 'transparent']}>
                    <TitleCard>Titulo</TitleCard>
                    <IconCard></IconCard>
                </Card>
                <Card  start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={[colors.azul_100, 'transparent']}>
                    <TitleCard>Titulo</TitleCard>
                    <IconCard></IconCard>
                </Card>
            </Container>
        </>
    )
}
