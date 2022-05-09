import styled from "styled-components/native";
import { colors } from '../../colors/index';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
    flex: 1;
    margin: 20px;
`

export const Card = styled(LinearGradient)`
    width: 100%;
    height: 50px;
    border-radius: 15px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    padding: 5px;
    margin: 10px;

`

export const TextCard = styled.Text`
    color: ${colors.branco};
    font-family: 'Rubik-SemiBold';
    font-size: 30px;
    overflow: visible;
`


