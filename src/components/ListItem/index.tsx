import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import Done from '../Done';
import Edit from '../Edit';

import { Container, Text } from './styles';

interface Props {
    text: string;
}

const ListItem: React.FC<Props> = ({ text }) => (
    <Swipeable renderLeftActions={Done} renderRightActions={Edit} key={text}>
        <Container>
            <Text>{text}</Text>
        </Container>
    </Swipeable>
);

export default ListItem;
