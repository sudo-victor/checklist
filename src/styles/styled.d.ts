import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            background: string[];

            item: string[];
            accept: string[];
            edit: string[];
            add: string[];
            input: string;

            title: string;
            text: string;
            textSecond: string;
        };
    }
}
