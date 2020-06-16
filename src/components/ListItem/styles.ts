import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs((props) => ({
    colors: [props.theme.colors.item[0], props.theme.colors.item[1]],
    start: { x: 1, y: 0 },
    end: { x: 1, y: 1 },
}))`
    height: 60px;
    padding: 5px 15px;
    margin: 10px 10px;
    elevation: 5;
    border-radius: 10px;
    justify-content: center;
`;

export const Text = styled.Text`
    color: ${(props) => props.theme.colors.text};
`;
