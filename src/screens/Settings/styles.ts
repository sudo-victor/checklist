import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const List = styled.View`
    flex: 1;
`;

export const ItemContainer = styled(LinearGradient).attrs((props) => ({
    colors: [props.theme.colors.item[0], props.theme.colors.item[1]],
    start: { x: 1, y: 0 },
    end: { x: 1, y: 1 },
}))`
    height: 60px;
    padding: 0px 15px;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.item[0]};
    border-bottom-width: ${(props) => props.theme.shadow.width}px;
    border-bottom-color: ${(props) => props.theme.shadow.color};
`;

export const ItemButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.5,
})`
    height: 60px;
    justify-content: center;
`;

export const ItemText = styled.Text`
    color: ${(props) => props.theme.colors.text};
    font-size: 18px;
`;
