import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";

import Logo from "../../assets/bg7.svg";
import { Card, Container, ContainerMore, IconCard, More, Title, TitleCard } from "./style";
import { colors } from '../../colors/index';
import Icon from 'react-native-vector-icons/FontAwesome5';


export const Initial = ({navigation})=>{
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
                   Informações
                </Title>
                <TouchableWithoutFeedback onPress={()=>{
                    console.log("foi")
                    navigation.navigate('Circuitos')
                }}>
                    <Card start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={[colors.azul_100, 'transparent']}>
                        <Icon style={{marginHorizontal: 10}} name='map-marked-alt' size={50}></Icon>
                        <TitleCard >Circuitos</TitleCard>
                        <IconCard></IconCard>
                    </Card>
                </TouchableWithoutFeedback>
                <ContainerMore>
                    <More>Em breve mais funcionalidades</More>
                </ContainerMore>
            </Container>
        </>
    )
}
