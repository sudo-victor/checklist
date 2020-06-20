import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Modal = styled.Modal`
    flex: 1;
`;

export const FormContainer = styled.View`
    flex: 1;
    padding: 50px 20px;
`;

export const Input = styled.TextInput`
    height: 120px;
    background-color: ${(props) => props.theme.colors.input};
    padding: 15px;
    elevation: 2;
    text-align-vertical: top;
    color: ${(props) => props.theme.colors.text};
`;

export const SaveContainer = styled(LinearGradient).attrs((props) => ({
    colors: [props.theme.colors.accept[0], props.theme.colors.accept[1]],
    start: { x: 1, y: 0 },
    end: { x: 1, y: 1 },
}))`
    width: 100%;
    height: 60px;
    margin: 50px 0px;
    elevation: 5;
    border-radius: 10px;
`;

export const SaveButton = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const SaveText = styled.Text`
    color: ${(props) => props.theme.colors.textButton};
`;
