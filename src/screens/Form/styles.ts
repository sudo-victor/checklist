import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
    flex: 1;
    background-color: #222;
`;

export const FormContainer = styled.View`
    flex: 1;
    padding: 50px 10px;
`;

export const Input = styled.TextInput`
    height: 120px;
    background-color: #3b3b3b;
    padding: 15px;
    text-align-vertical: top;
    color: #fff;
`;

export const SaveContainer = styled(LinearGradient).attrs({
    colors: ['#3CC03A', '#082907'],
    start: { x: 1, y: 0 },
    end: { x: 1, y: 1 },
})`
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
    color: #fff;
`;
