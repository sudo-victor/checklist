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
    elevation: 5;
    background: #3b3b3b;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #fff;
`;

export const List = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    padding: 0px 10px;
`;

export const AddContainer = styled(LinearGradient).attrs({
    colors: ['#3CC03A', '#082907'],
    start: { x: 1, y: 0 },
    end: { x: 1, y: 1 },
})`
    height: 60px;
    width: 60px;
    border-radius: 30px;
    position: absolute;
    bottom: 25px;
    right: 25px;
    elevation: 5;
`;

export const AddButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.55,
})`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
