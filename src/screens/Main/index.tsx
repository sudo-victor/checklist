import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import ListItem from '../../components/ListItem';

import {
    Container,
    Header,
    Title,
    SettingsButton,
    List,
    AddContainer,
    AddButton,
} from './styles';

interface State {
    checklist: Item[];
}

interface Item {
    id: string;
    content: string;
}

const Main: React.FC = () => {
    const navigation = useNavigation();
    const items = useSelector((state: State) => state.checklist);

    function goToForm() {
        navigation.navigate('Form', { title: 'New Item' });
    }

    function goToSettings() {
        navigation.navigate('Settings');
    }

    return (
        <Container>
            <Header>
                <Title>Checklist</Title>

                <SettingsButton onPress={goToSettings}>
                    <MaterialIcons name="settings" size={30} color="#fff" />
                </SettingsButton>
            </Header>

            <List>
                {items.map((item) => (
                    <ListItem key={item.id} item={item} />
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
