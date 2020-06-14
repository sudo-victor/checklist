import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
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
