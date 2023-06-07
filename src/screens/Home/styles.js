import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
    align-items: center;
    background-color: #2F48D4;
    flex: 1;
    padding: 20px;
`;

export const Animation = styled(Animatable.View)`
    align-items: center;
    width: 100%;
`;

export const Input = styled.TextInput`
    background-color: #FFF;
    border-radius: 5px;
    color: #2F48D4;
    font-family: Roboto_500Medium;
    font-size: 16px;
    margin-top: 20px;
    padding: 8px 16px;
    width: 100%;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    background-color: #F6E125;
    border-radius: 5px;
    margin-top: 20px;
    padding: 8px;
    width: 100%;
`;

export const ButtonText = styled.Text`
    color: #2F48D4;
    font-family: Roboto_500Medium;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const AddressArea = styled.View`
    align-items: baseline;
    margin-top: 15px;
`;

export const Text = styled.Text`
    color: #F6E125;
    font-family: Roboto_500Medium;
    font-size: 18px;
`;