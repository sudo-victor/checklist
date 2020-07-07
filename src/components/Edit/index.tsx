import React, { useContext } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import MainContext from '../../screens/Main/context';

import { Container, Button } from './styles';

interface Props {
    item: Item;
}

interface Item {
    id: string;
    content: string;
}

const Edit: React.FC<Props> = ({ item }) => {
    const { openForm } = useContext(MainContext);

    return (
        <Container>
            <Button onPress={() => openForm('Edit Item', item)}>
                <FontAwesome name="pencil" color="#fff" size={22} />
            </Button>
        </Container>
    );
};

export default Edit;
