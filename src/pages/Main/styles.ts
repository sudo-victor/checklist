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

export const ItemContainer = styled.View`
    height: 60px;
    padding: 5px 15px;
    margin-bottom: 10px;
    background: #3b3b3b;
    elevation: 5;
    border-radius: 10px;
    justify-content: center;
`;

export const ItemText = styled.Text`
    color: #fff;
`;

export const DoneContainer = styled(LinearGradient).attrs({
    colors: ['#3CC03A', '#082907'],
    start: { x: 1, y: 0 },
    end: { x: 1, y: 1 },
})`
    flex: 1;
    height: 60px;
    padding: 5px 15px;
    margin-bottom: 10px;
    elevation: 5;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const DoneText = styled.Text`
    color: #fff;
`;

export const EditContainer = styled(LinearGradient).attrs({
    colors: ['#E1CF70', '#5E5631'],
    start: { x: 1, y: 0 },
    end: { x: 1, y: 1 },
})`
    height: 60px;
    width: 60px;
    margin: 0px 0px 0px 10px;
    elevation: 5;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
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
