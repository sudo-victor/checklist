import React from 'react';

import Header from '../Header';

import { Container, Content } from './styled';

interface Props {
    title: string;
    goTo?: string;
    func?: () => void;
}

const Layout: React.FC<Props> = ({ title, goTo, func, children }) => (
    <Container>
        <Header title={title} goTo={goTo} func={func} />
        <Content>{children}</Content>
    </Container>
);

export default Layout;
