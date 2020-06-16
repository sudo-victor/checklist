import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import Layout from '../../components/Layout';

import { List, ItemContainer, ItemButton, ItemText } from './styles';

interface State {
    theme: {
        name: string;
    };
}

const Theme: React.FC = () => {
    const [selectedTheme, setSelectedTheme] = useState('');
    const dispatch = useDispatch();
    const theme = useSelector((state: State) => state.theme.name);

    useEffect(() => {
        function loadSelectedTheme() {
            setSelectedTheme(theme);
        }

        loadSelectedTheme();
    }, [selectedTheme]);

    function handleTheme(themeTitle) {
        dispatch({ type: 'UPDATE_THEME', payload: { name: themeTitle } });
        setSelectedTheme(themeTitle);
    }

    return (
        <Layout title="Themes" goTo="Settings">
            <List>
                <ItemContainer>
                    <ItemButton onPress={() => handleTheme('light')}>
                        <ItemText>Light</ItemText>
                    </ItemButton>

                    {/* <AntDesign name="check" size={22} color="#82C486" /> */}
                </ItemContainer>

                <ItemContainer>
                    <ItemButton onPress={() => handleTheme('dark')}>
                        <ItemText>Dark</ItemText>
                    </ItemButton>

                    {/* <AntDesign name="check" size={22} color="#82C486" /> */}
                </ItemContainer>

                <ItemContainer>
                    <ItemButton onPress={() => handleTheme('dracula')}>
                        <ItemText>Dracula</ItemText>
                    </ItemButton>

                    {/* <AntDesign name="check" size={22} color="#82C486" /> */}
                </ItemContainer>

                <ItemContainer>
                    <ItemButton onPress={() => handleTheme('unicorn')}>
                        <ItemText>Unicorn</ItemText>
                    </ItemButton>

                    {/* <AntDesign name="check" size={22} color="#82C486" /> */}
                </ItemContainer>
            </List>
        </Layout>
    );
};

export default Theme;
