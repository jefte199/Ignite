import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justyfy-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const LoadinfIndicator = styled.ActivityIndicator`
  size: large;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
