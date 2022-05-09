import styled from "styled-components/native";
import { colors } from '../../colors/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    width: 100%;
    height: 50px;
    background-color: ${colors.preto};
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`

export const IconBack = styled(Icon).attrs(()=>({
    name: 'arrow-left',
    size: 20,
    color: colors.azul_100
}))`
    position: absolute;
    left: 10px;
`
