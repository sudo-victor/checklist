import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            background: string[];

            header: string[];
            item: string[];
            accept: string[];
            edit: string[];
            add: string[];
            input: string;

            title: string;
            text: string;
            textSecond: string;
            textButton: string;
        };

        shadow: {
            width: number;
            color: string;
        };
    }
}
