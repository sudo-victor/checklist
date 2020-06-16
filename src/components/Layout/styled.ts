import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs((props) => ({
    colors: [
        props.theme.colors.background[0],
        props.theme.colors.background[1],
    ],
    start: { x: 1, y: 0 },
    end: { x: 1, y: 1 },
}))`
    flex: 1;
`;
