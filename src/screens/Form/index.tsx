import React, { useState, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MainContext from '../Main/context';

import {
    Modal,
    FormContainer,
    Input,
    SaveContainer,
    SaveButton,
    SaveText,
} from './styles';

import Layout from '../../components/Layout';

interface Props {
    visible: boolean;
    close: () => void;
    title: string;
    item: Item;
}

interface Params {
    title: string;
    item: Item;
}

interface Item {
    id: string;
    content: string;
}

const Form: React.FC<Props> = ({ visible, close, title, item }) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const { closeForm } = useContext(MainContext);

    useEffect(() => {
        if (item) {
            setValue(item.content);
        } else {
            setValue('');
        }
    }, [item]);

    // Create or update an item
    function handleSaveItem() {
        // If the  item already exists, it will update the current item
        if (item) {
            dispatch({
                type: 'UPDATE_ITEM',
                payload: { id: item.id, content: value },
            });
            // If the item don't exists, it will create a new item
        } else {
            const arrayItem = value.split(',');
            arrayItem.map((nItem) =>
                dispatch({
                    type: 'ADD_ITEM',
                    payload: { content: nItem.trim() },
                }),
            );
        }

        closeForm();
    }

    return (
        <Modal visible={visible} animationType="slide">
            <Layout title={title} func={close}>
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
        </Modal>
    );
};

export default Form;
