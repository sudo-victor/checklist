import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import ListItem from '../../components/ListItem';

import {
    Container,
    Header,
    Title,
    List,
    AddContainer,
    AddButton,
} from './styles';

const Main: React.FC = () => {
    const [data, setData] = useState([
        'Fazer Chocolate1',
        'Fazer Chocolate2',
        'Fazer Chocolate3',
        'Fazer Chocolate4',
        'Fazer Chocolate5',
        'Fazer Chocolate6',
        'Fazer Chocolate7',
        'Fazer Chocolate8',
        'Fazer Chocolate9',
        'Fazer Chocolate10',
        'Fazer Chocolate11',
        'Fazer Chocolate12',
    ]);
    const navigation = useNavigation();

    function goToForm() {
        navigation.navigate('Form', { title: 'New Item' });
    }

    return (
        <Container>
            <Header>
                <Title>Checklist</Title>
            </Header>

            <List>
                {data.map((item) => (
                    <ListItem key={item} text={item} />
                ))}
            </List>

            <AddContainer>
                <AddButton onPress={goToForm}>
                    <AntDesign name="plus" color="#fff" size={22} />
                </AddButton>
            </AddContainer>
        </Container>
    );
};

export default Main;
