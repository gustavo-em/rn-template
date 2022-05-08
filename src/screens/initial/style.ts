import styled from "styled-components/native";
import { colors } from '../../colors/index';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    padding: 20px;
`;


export const Title = styled.Text`
    color: ${colors.azul_100};
    font-family: 'Rubik-SemiBold';
    font-size: 34px;

`;


export const Card = styled(LinearGradient)`
    width: 100%;
    height: 100px;
    border-radius: 15px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    position: relative;

    margin: 20px 0px;
    
`;

export const IconCard = styled(Icon).attrs(()=>({
    name: 'arrow-right',
    size: 35,
    color: colors.azul_100
}))`
    position: absolute;
    right: 10px;


`

export const TitleCard = styled.Text`
    font-family: 'Rubik-Regular';
    font-size: 26px;
    color: ${colors.branco};
    padding: 20px;
`



// export const Card = styled(LinearGradient)`
//     width: 100%;
//     height: 100px;
// `






