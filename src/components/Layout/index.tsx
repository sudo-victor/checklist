import React from 'react';

import Header from '../Header';

import { Container, Content } from './styled';

interface Props {
    title: string;
    goTo: string;
}

const Layout: React.FC<Props> = ({ title, goTo, children }) => (
    <Container>
        <Header title={title} goTo={goTo} />
        <Content>{children}</Content>
    </Container>
);

export default Layout;
