import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import {
    Container,
    Header,
    Button,
    Title,
    FormContainer,
    Input,
    SaveContainer,
    SaveButton,
    SaveText,
} from './styles';

interface Params {
    title: string;
    text: string;
}

const Form: React.FC = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const routeParams = route.params as Params;

    function goToMain() {
        navigation.navigate('Main');
    }

    return (
        <Container>
            <Header>
                <Button onPress={goToMain}>
                    <AntDesign name="arrowleft" size={22} color="#fff" />
                </Button>
                <Title>{routeParams.title}</Title>
            </Header>

            <FormContainer>
                <Input placeholder="Ex: Comprar pão, jogar lixo fora..." />

                <SaveContainer>
                    <SaveButton>
                        <SaveText>Salvar</SaveText>
                    </SaveButton>
                </SaveContainer>
            </FormContainer>
        </Container>
    );
};

export default Form;
