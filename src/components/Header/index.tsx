import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { Container, Button, Title } from './styles';

interface Props {
    title: string;
    goTo: string;
}

const Header: React.FC<Props> = ({ title, goTo }) => {
    const navigation = useNavigation();

    function goToMain() {
        navigation.navigate(goTo);
    }

    return (
        <Container>
            <Button onPress={goToMain}>
                <AntDesign name="arrowleft" size={22} color="#fff" />
            </Button>
            <Title>{title}</Title>
        </Container>
    );
};

export default Header;
