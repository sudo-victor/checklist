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

export const Header = styled(LinearGradient).attrs((props) => ({
    colors: [props.theme.colors.header[0], props.theme.colors.header[1]],
    start: { x: 1, y: 0 },
    end: { x: 1, y: 1 },
}))`
    height: 60px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background: ${(props) => props.theme.colors.header[0]};
    border-bottom-width: ${(props) => props.theme.shadow.width}px;
    border-bottom-color: ${(props) => props.theme.shadow.color};
`;

export const Title = styled.Text`
    font-size: 18px;
    color: ${(props) => props.theme.colors.title};
`;

export const SettingsButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    position: absolute;
    right: 15px;
`;

export const List = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    padding: 0px 10px;
    margin: 10px 0px;
`;

export const AddContainer = styled(LinearGradient).attrs((props) => ({
    colors: [props.theme.colors.add[0], props.theme.colors.add[1]],
    start: { x: 1, y: 0 },
    end: { x: 1, y: 1 },
}))`
    height: 60px;
    width: 60px;
    border-radius: 30px;
    position: absolute;
    bottom: 25px;
    right: 25px;
    elevation: 5;
`;

export const AddButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
