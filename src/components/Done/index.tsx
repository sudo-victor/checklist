import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, Button, Text } from './styles';

interface Props {
    item: Item;
}

interface Item {
    id: string;
    content: string;
}

const Done: React.FC<Props> = ({ item }) => {
    const dispatch = useDispatch();

    function handleDone() {
        dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } });
    }

    return (
        <Container>
            <Button onPress={handleDone}>
                <Text>Done</Text>
            </Button>
        </Container>
    );
};

export default Done;
