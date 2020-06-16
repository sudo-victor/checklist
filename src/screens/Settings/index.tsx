import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Layout from '../../components/Layout';

import { List, ItemContainer, ItemButton, ItemText } from './styles';

const Settings: React.FC = () => {
    const navigation = useNavigation();

    function goToTheme() {
        navigation.navigate('Theme');
    }

    return (
        <Layout title="Settings" goTo="Main">
            <List>
                <ItemContainer>
                    <ItemButton onPress={goToTheme}>
                        <ItemText>Theme</ItemText>
                    </ItemButton>
                </ItemContainer>
            </List>
        </Layout>
    );
};

export default Settings;
