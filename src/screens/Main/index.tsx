import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import logo from '../../../assets/logo.png';

import ListItem from '../../components/ListItem';
import FormModal from '../Form';

import {
    Container,
    Header,
    Logo,
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
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const items = useSelector((state: State) => state.checklist);

    function openForm() {
        setModalVisible(true);
    }

    function closeForm() {
        setModalVisible(false);
    }

    function goToSettings() {
        navigation.navigate('Settings');
    }

    return (
        <Container>
            <Header>
                <Logo source={logo} width={12} />

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
                <AddButton onPress={openForm}>
                    <AntDesign name="plus" color="#fff" size={22} />
                </AddButton>
            </AddContainer>

            <FormModal
                visible={modalVisible}
                close={closeForm}
                title="New Item"
            />
        </Container>
    );
};

export default Main;
