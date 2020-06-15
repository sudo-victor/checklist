import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import {
    Container,
    Header,
    Button,
    Title,
    FormContainer,
    Input,
    SaveContainer,
    SaveButton,
    SaveText,
} from './styles';

interface Params {
    title: string;
    text: string;
}

const Form: React.FC = () => {
    const [value, setValue] = useState('');
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const routeParams = route.params as Params;

    function goToMain() {
        navigation.navigate('Main');
    }

    function addItem() {
        dispatch({ type: 'ADD_ITEM', payload: { text: value } });

        navigation.navigate('Main');
    }

    return (
        <Container>
            <Header>
                <Button onPress={goToMain}>
                    <AntDesign name="arrowleft" size={22} color="#fff" />
                </Button>
                <Title>{routeParams.title}</Title>
            </Header>

            <FormContainer>
                <Input
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    placeholder="Ex: Comprar pão, jogar lixo fora..."
                />

                <SaveContainer>
                    <SaveButton onPress={addItem}>
                        <SaveText>Salvar</SaveText>
                    </SaveButton>
                </SaveContainer>
            </FormContainer>
        </Container>
    );
};

export default Form;
