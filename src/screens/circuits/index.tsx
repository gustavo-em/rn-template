import { DefaultRouterOptions, NavigationProp, RouteProp } from '@react-navigation/native';
import React from 'react'
import { ActivityIndicator, Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import Logo from "../../assets/bg7.svg";
import { CardComponent } from '../../components/card';
import { HeaderBack } from '../../components/headerBack';
import { Container } from './style';
type IItemCircuits = {
    item: {
        circuitId: string;
        circuitName: string;
        Location: object;
    }
}

type INav = { 
    navigation: NavigationType
    route: DefaultRouterOptions;
}
export const Circuits = ({ navigation, route }: INav) => {

    const [circuits, setCircuits] = React.useState([])
    React.useEffect(() => {
        fetch('http://ergast.com/api/f1/circuits.json')
            .then(r => r.json())
            .then(r => {
                console.log(r)
                setCircuits(r.MRData.CircuitTable.Circuits)
            }).catch(err=>{
                Alert.alert("Erro ao carregar os circuitos da API", err)
            })
    }, [])
    return (
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
                <Logo />
            </View>
            <HeaderBack navigation={navigation}></HeaderBack>
            <Container>
                {circuits ? 
                <FlatList            
                    data={circuits}
                    renderItem={({item}: IItemCircuits ) =>
                        <TouchableOpacity onPress={()=>Alert.alert(`${item.circuitName}`, `País: ${item.Location.country}\nLocalidade: ${item.Location.locality}`)}>
                            <CardComponent>{item.circuitName}</CardComponent>
                        </TouchableOpacity> 
                    }  
                /> : <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', zIndex: 5000}}><ActivityIndicator size={50} color={'#FFFFFF'}></ActivityIndicator></View>
                }

            </Container>
        </>
    )
}
