import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#3CC03A', '#082907'],
    start: { x: 1, y: 0 },
    end: { x: 1, y: 1 },
})`
    flex: 1;
    height: 60px;
    padding: 0;
    margin-bottom: 10px;
    elevation: 5;
    border-radius: 10px;
`;

export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: 0.55,
})`
    flex: 1;
    flex-direction: row;
    border-radius: 10px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: #fff;
`;
