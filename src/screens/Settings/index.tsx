import React from 'react';

import Layout from '../../components/Layout';

import { List, ItemContainer, ItemButton, ItemText } from './styles';

const Settings: React.FC = () => (
    <Layout title="Settings" goTo="Main">
        <List>
            <ItemContainer>
                <ItemButton>
                    <ItemText>Theme</ItemText>
                </ItemButton>
            </ItemContainer>
        </List>
    </Layout>
);

export default Settings;
