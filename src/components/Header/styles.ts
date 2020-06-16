import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs((props) => ({
    colors: [props.theme.colors.header[0], props.theme.colors.header[1]],
    start: { x: 1, y: 0 },
    end: { x: 1, y: 1 },
}))`
    height: 60px;
    padding-left: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.primary};
    border-bottom-width: ${(props) => props.theme.shadow.width}px;
    border-bottom-color: ${(props) => props.theme.shadow.color};
`;

export const Button = styled.TouchableOpacity`
    position: absolute;
    left: 15px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: ${(props) => props.theme.colors.title};
`;
