import React, { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import {
    FormContainer,
    Input,
    SaveContainer,
    SaveButton,
    SaveText,
} from './styles';

import Layout from '../../components/Layout';

interface Params {
    title: string;
    item: Item;
}

interface Item {
    id: string;
    content: string;
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
                    ? routeParams.item.content
                    : null;
            if (textItem) {
                setValue(textItem);
                setAlreadyExists(true);
            }
        }

        loadInput();
    }, []);

    function handleSaveItem() {
        if (alreadyExists) {
            dispatch({
                type: 'UPDATE_ITEM',
                payload: { id: routeParams.item.id, content: value },
            });
        } else {
            const arrayItem = value.split(',');
            arrayItem.map((item) =>
                dispatch({
                    type: 'ADD_ITEM',
                    payload: { content: item.trim() },
                }),
            );
        }

        navigation.navigate('Main');
    }

    return (
        <Layout title={routeParams.title} goTo="Main">
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
        </Layout>
    );
};

export default Form;
