import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

import ListItem from '../../components/ListItem';

import { Container, Header, Title, List, AddButton } from './styles';

const Main: React.FC = () => {
    const [data, setData] = useState([
        'Fazer Chocolate1',
        'Fazer Chocolate2',
        'Fazer Chocolate3',
    ]);

    return (
        <Container>
            <Header>
                <Title>Checklist</Title>
            </Header>

            <List>
                {data.map((item) => (
                    <ListItem text={item} />
                ))}
            </List>

            <AddButton>
                <AntDesign name="plus" color="#fff" size={22} />
            </AddButton>
        </Container>
    );
};

export default Main;
