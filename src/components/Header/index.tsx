import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { Container, Button, Title } from './styles';

interface Props {
    title: string;
    goTo?: string;
    func?: () => void;
}

const Header: React.FC<Props> = ({ title, goTo, func }) => {
    const navigation = useNavigation();

    function goToSomewhere() {
        if (goTo) {
            navigation.navigate(goTo);
        } else {
            func();
        }
    }

    return (
        <Container>
            <Button onPress={goToSomewhere}>
                <AntDesign name="arrowleft" size={22} color="#fff" />
            </Button>
            <Title>{title}</Title>
        </Container>
    );
};

export default Header;
