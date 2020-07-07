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
    content: string;
}

const ListItem: React.FC<Props> = ({ item }) => {
    function simplifyText(value, min) {
        if (value.length > min) {
            const valueSplited = value.slice(0, min);

            return `${valueSplited}...`;
        }
        return value;
    }

    return (
        <Swipeable
            renderLeftActions={() => <Done item={item} />}
            renderRightActions={() => <Edit item={item} />}
        >
            <Container>
                <Text>{simplifyText(item.content, 50)}</Text>
            </Container>
        </Swipeable>
    );
};

export default ListItem;
