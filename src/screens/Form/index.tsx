import React, { useState, useEffect } from 'react';
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
    item: Item;
}

interface Item {
    id: string;
    text: string;
}

const Form: React.FC = () => {
    const [value, setValue] = useState('');
    const [alreadyExists, setAlreadyExists] = useState(false);
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const routeParams = route.params as Params;

    useEffect(() => {
        function loadInput() {
            const textItem =
                routeParams.title === 'Edit Item'
                    ? routeParams.item.text
                    : null;
            if (textItem) {
                setValue(textItem);
                setAlreadyExists(true);
            }
        }

        loadInput();
    }, []);

    function goToMain() {
        navigation.navigate('Main');
    }

    function handleSaveItem() {
        if (alreadyExists) {
            dispatch({
                type: 'UPDATE_ITEM',
                payload: { id: routeParams.item.id, text: value },
            });
        } else {
            dispatch({ type: 'ADD_ITEM', payload: { text: value } });
        }

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
                    blurOnSubmit={false}
                    onChangeText={(text) => setValue(text)}
                    placeholder="Ex: Comprar pão, jogar lixo fora..."
                />

                <SaveContainer>
                    <SaveButton onPress={handleSaveItem}>
                        <SaveText>Salvar</SaveText>
                    </SaveButton>
                </SaveContainer>
            </FormContainer>
        </Container>
    );
};

export default Form;
