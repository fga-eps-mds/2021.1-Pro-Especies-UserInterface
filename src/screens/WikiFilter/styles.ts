import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const PageContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const FishBodyContainer = styled.View`
  margin-top: ${RFValue(19, 640)}px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const GroupContainer = styled.View`
`;

export const BoldText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12, 640)}px;
  line-height: ${RFValue(18, 640)}px;
  color: ${({ theme }) => theme.colors.on_background};
  margin: ${RFValue(8, 640)}px 0;
  margin-left: ${RFValue(32, 640)}px;
`;
export const GroupOptionsContainer = styled.View`
  background-color: rgba(32, 46, 53, 0.05);
`;

export const CheckBoxRow = styled.View`
  margin-left: ${RFValue(32, 640)}px;
  flex-direction: row;
  align-items: center;
`;

export const FilterContainer = styled.View`
  margin-bottom: ${RFValue(54, 640)}px;
  width: 100%;
`
