import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { dracula, dark, unicorn, light } from './styles/themes';

import { store, persistor } from './store';

import Routes from './routes';

const MainWrapper = () => (
    <Provider store={store}>
        <Main />
    </Provider>
);

interface State {
    theme: {
        name: string;
    };
}

const Main = () => {
    const currentTheme = useSelector((state: State) => state.theme.name);
    const [theme, setTheme] = useState({});
    const themesList = {
        dracula: () => handleTheme(dracula),
        dark: () => handleTheme(dark),
        light: () => handleTheme(light),
        unicorn: () => handleTheme(unicorn),
    };

    useEffect(() => {
        function loadTheme() {
            themesList[currentTheme]();
        }

        loadTheme();
    }, [currentTheme]);

    function handleTheme(nameTheme) {
        setTheme(nameTheme);
    }

    return (
        <ThemeProvider theme={theme}>
            <PersistGate loading={null} persistor={persistor}>
                <StatusBar barStyle="light-content" backgroundColor="#000" />
                <Routes />
            </PersistGate>
        </ThemeProvider>
    );
};

export default MainWrapper;
