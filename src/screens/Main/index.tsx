import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import logo from '../../../assets/logo.png';

import MainContext from './context';

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
    const [modalTitle, setModalTitle] = useState('');
    const [modalItem, setModalItem] = useState<Item>(null);
    const navigation = useNavigation();
    const items = useSelector((state: State) => state.checklist);

    function openForm(title: string, item?: Item) {
        if (item) {
            setModalItem(item);
        }

        setModalTitle(title);
        setModalVisible(true);
    }

    function closeForm() {
        setModalVisible(false);
        setModalItem(null);
    }

    function goToSettings() {
        navigation.navigate('Settings');
    }

    return (
        <Container>
            <MainContext.Provider value={{ closeForm, openForm }}>
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
                    <AddButton onPress={() => openForm('New Item')}>
                        <AntDesign name="plus" color="#fff" size={22} />
                    </AddButton>
                </AddContainer>

                <FormModal
                    visible={modalVisible}
                    close={closeForm}
                    title={modalTitle}
                    item={modalItem}
                />
            </MainContext.Provider>
        </Container>
    );
};

export default Main;
