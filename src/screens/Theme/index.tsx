import React from 'react';

import Layout from '../../components/Layout';

import { List, ItemContainer, ItemButton, ItemText } from './styles';

const Theme: React.FC = () => {
    function handleTheme() {}

    return (
        <Layout title="Theme" goTo="Settings">
            <List>
                <ItemContainer>
                    <ItemButton>
                        <ItemText>Light</ItemText>
                    </ItemButton>
                </ItemContainer>

                <ItemContainer>
                    <ItemButton>
                        <ItemText>Dark</ItemText>
                    </ItemButton>
                </ItemContainer>

                <ItemContainer>
                    <ItemButton>
                        <ItemText>Dracula</ItemText>
                    </ItemButton>
                </ItemContainer>

                <ItemContainer>
                    <ItemButton>
                        <ItemText>Unicorn</ItemText>
                    </ItemButton>
                </ItemContainer>
            </List>
        </Layout>
    );
};

export default Theme;
