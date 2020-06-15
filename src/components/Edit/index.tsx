import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import { Container, Button } from './styles';

interface Props {
    item: Item;
}

interface Item {
    id: string;
    text: string;
}

const Edit: React.FC<Props> = ({ item }) => {
    const navigation = useNavigation();

    function goToForm() {
        navigation.navigate('Form', { title: 'Edit Item', item });
    }

    return (
        <Container>
            <Button onPress={goToForm}>
                <FontAwesome name="pencil" color="#fff" size={22} />
            </Button>
        </Container>
    );
};

export default Edit;
