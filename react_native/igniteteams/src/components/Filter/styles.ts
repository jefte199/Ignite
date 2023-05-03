import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type FilterStyleProps = {
  isAction: boolean;
}

export const Container = styled(TouchableOpacity) <FilterStyleProps>`
  text-tranform: uppercase;
  
  ${({ theme, isAction }) => isAction && css`
    border: 1px solid ${theme.COLORS.GREEN_700};
    opacity: ${isAction ? 1 : 0.5};
  `};

  border-radius: 4px;
  margin-right: 12px;

  height: 38px;
  width: 70px;

  align-items: center;
  justify-content: center; 
`;

export const Title = styled.Text`
  ${({ theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE}
  `};
`;

