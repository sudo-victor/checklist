import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { Container, Button } from './styles';

const Edit = () => (
    <Container>
        <Button>
            <FontAwesome name="pencil" color="#fff" size={22} />
        </Button>
    </Container>
);

export default Edit;
