import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import Done from '../Done';
import Edit from '../Edit';

import { Container, Text } from './styles';

interface Props {
    item: Item;
}

interface Item {
    id: string;
    text: string;
}

const ListItem: React.FC<Props> = ({ item }) => (
    <Swipeable
        renderLeftActions={() => <Done item={item} />}
        renderRightActions={() => <Edit item={item} />}
    >
        <Container>
            <Text>{item.text}</Text>
        </Container>
    </Swipeable>
);

export default ListItem;
