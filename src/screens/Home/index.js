import React, { useState } from 'react';
import { Alert, Image } from 'react-native';
import {
    Container,
    Animation,
    Input,
    Button,
    ButtonText,
    AddressArea,
    Text
} from './styles';
import logo from '../../assets/cnpj.jpg';
import api from '../../services/api';

export default function Home() {
    const [cnpj, setCNPJ] = useState('');
    const [dados, setDados] = useState(null);

    async function handleBuscar() {
        try {
            const { status, data } = await api.get(`${cnpj}`);

            if (status != 200 || data.erro) {
                Alert.alert('Buscar', 'Digite um CNPJ válido.');
            } else {
                setDados(data);
            }

        } catch (error) {
            Alert.alert('Buscar', 'Digite um CNPJ válido');
        }
    };

    async function handleLimpar() {
        setDados(null);
        setCNPJ('');
    }

    return (
        <Container>
            <Animation
                animation='bounceInDown'
                delay={100}
                duration={1500}
            >
                <Image source={logo} />
            </Animation>

            <Animation
                animation='bounceInRight'
                delay={100}
                duration={1500}
            >
                {!dados &&
                    <Input
                        keyboardType="numeric"
                        maxLength={14}
                        onChangeText={setCNPJ}
                        onSubmitEditing={handleBuscar}
                        placeholder="Digite o cnpj que deseja buscar"
                        placeholderTextColor="#2F48D4"
                        value={cnpj}
                    />
                }

                <Button
                    activeOpacity={0.8}
                    onPress={dados ? handleLimpar : handleBuscar}>
                    <ButtonText>
                        {dados ? 'Limpar' : 'Buscar'}
                    </ButtonText>
                </Button>
            </Animation>

            {dados &&
                <AddressArea>
                    <Text>Razão Social: {dados.razao_social}</Text>
                    <Text>Nome Fantasia: {dados.nome_fantasia}</Text>
                    <Text>Município: {dados.municipio}</Text>
                    <Text>Estado: {dados.uf}</Text>
                    <Text>Situação Cadastral: {dados.descricao_situacao_cadastral}</Text>
                    <Text>Descrição: {dados.cnae_fiscal_descricao}</Text>
                    <Text>Natureza Jurídica: {dados.natureza_juridica}</Text>
                </AddressArea>
            }
        </Container>
    );
}