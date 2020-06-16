import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { dracula, dark, unicorn } from './styles/themes';

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

    useEffect(() => {
        function loadTheme() {
            if (currentTheme === 'dark') {
                setTheme(dark);
                return;
            }
            if (currentTheme === 'dracula') {
                setTheme(dracula);
                return;
            }
            if (currentTheme === 'unicorn') {
                setTheme(unicorn);
            }
        }

        loadTheme();
    }, [currentTheme]);

    return (
        <ThemeProvider theme={theme}>
            <PersistGate loading={null} persistor={persistor}>
                <StatusBar barStyle="light-content" />
                <Routes />
            </PersistGate>
        </ThemeProvider>
    );
};

export default MainWrapper;
