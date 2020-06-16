import styled from 'styled-components/native';

export const Container = styled.View`
    height: 60px;
    padding-left: 10px;
    flex-direction: row;
    align-items: center;
    background: ${(props) => props.theme.colors.primary};
`;

export const Button = styled.TouchableNativeFeedback``;

export const Title = styled.Text`
    font-size: 18px;
    padding-left: 10px;
    color: ${(props) => props.theme.colors.title};
`;
