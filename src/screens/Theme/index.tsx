import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
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

    // Alter theme
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

                    <View
                        style={
                            selectedTheme === 'light'
                                ? style.checked
                                : style.unchecked
                        }
                    >
                        <AntDesign name="check" size={22} color="#82C486" />
                    </View>
                </ItemContainer>

                <ItemContainer>
                    <ItemButton onPress={() => handleTheme('dark')}>
                        <ItemText>Dark</ItemText>
                    </ItemButton>

                    <View
                        style={
                            selectedTheme === 'dark'
                                ? style.checked
                                : style.unchecked
                        }
                    >
                        <AntDesign name="check" size={22} color="#82C486" />
                    </View>
                </ItemContainer>

                <ItemContainer>
                    <ItemButton onPress={() => handleTheme('dracula')}>
                        <ItemText>Dracula</ItemText>
                    </ItemButton>

                    <View
                        style={
                            selectedTheme === 'dracula'
                                ? style.checked
                                : style.unchecked
                        }
                    >
                        <AntDesign name="check" size={22} color="#82C486" />
                    </View>
                </ItemContainer>

                <ItemContainer>
                    <ItemButton onPress={() => handleTheme('unicorn')}>
                        <ItemText>Unicorn</ItemText>
                    </ItemButton>

                    <View
                        style={
                            selectedTheme === 'unicorn'
                                ? style.checked
                                : style.unchecked
                        }
                    >
                        <AntDesign name="check" size={22} color="#82C486" />
                    </View>
                </ItemContainer>
            </List>
        </Layout>
    );
};

export default Theme;

const style = StyleSheet.create({
    checked: {
        display: 'flex',
    },
    unchecked: {
        display: 'none',
    },
});
