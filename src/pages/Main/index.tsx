import React, { useState } from 'react';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {
    Container,
    Header,
    Title,
    List,
    ItemContainer,
    ItemText,
    DoneContainer,
    DoneText,
    EditContainer,
    AddButton,
} from './styles';

const Main: React.FC = () => {
    const [data, setData] = useState([
        'Fazer Chocolate1',
        'Fazer Chocolate2',
        'Fazer Chocolate3',
    ]);

    function Done() {
        return (
            <DoneContainer>
                <DoneText>Concluir</DoneText>
            </DoneContainer>
        );
    }

    function Edit() {
        return (
            <EditContainer>
                <FontAwesome name="pencil" color="#fff" size={22} />
            </EditContainer>
        );
    }

    return (
        <Container>
            <Header>
                <Title>Checklist</Title>
            </Header>

            <List>
                {data.map((item) => (
                    <Swipeable
                        renderLeftActions={Done}
                        renderRightActions={Edit}
                        key={item}
                    >
                        <ItemContainer>
                            <ItemText>{item}</ItemText>
                        </ItemContainer>
                    </Swipeable>
                ))}
            </List>

            <AddButton>
                <AntDesign name="plus" color="#fff" size={22} />
            </AddButton>
        </Container>
    );
};

export default Main;
