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

const Form = () => {
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

    // Create or update an item
    function handleSaveItem() {
        // If the  item already exists, it will update the current item
        if (alreadyExists) {
            dispatch({
                type: 'UPDATE_ITEM',
                payload: { id: routeParams.item.id, content: value },
            });

            // If the item don't exists, it will create a new item
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
                    placeholder="Ex: To buy bread, to put the garbage out..."
                />

                <SaveContainer>
                    <SaveButton onPress={handleSaveItem}>
                        <SaveText>Save</SaveText>
                    </SaveButton>
                </SaveContainer>
            </FormContainer>
        </Layout>
    );
};

export default Form;
