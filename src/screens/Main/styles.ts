import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
    flex: 1;
    background-color: #222;
`;

export const Header = styled.View`
    height: 60px;
    align-items: center;
    justify-content: center;
    background: #3b3b3b;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #fff;
`;

export const List = styled.View`
    flex: 1;
    padding: 10px 5px;
`;

export const AddButton = styled(LinearGradient).attrs({
    colors: ['#3CC03A', '#082907'],
    start: { x: 1, y: 0 },
    end: { x: 1, y: 1 },
})`
    height: 60px;
    width: 60px;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    position: absolute;
    bottom: 25px;
    right: 25px;
`;
