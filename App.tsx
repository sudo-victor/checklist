import React, { useState, useCallback } from 'react';
import { AppLoading } from 'expo';
import { AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';

import Main from './src';

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    const onFinish = useCallback(() => {
        setIsLoading(false);
    }, [isLoading]);

    const loadIcons = useCallback(async () => {
        setIsLoading(true);

        return await Font.loadAsync({
            ...AntDesign.font,
            ...MaterialIcons.font,
            ...FontAwesome.font,
        });
    }, [isLoading]);

    return (
        <>
            {
                isLoading ? (
                    <AppLoading startAsync={loadIcons} onFinish={onFinish} />
                )
                    : (

                        <Main />
                    )
            }
        </>
    );
}
