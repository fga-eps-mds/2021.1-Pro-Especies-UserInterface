import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Image = styled.Image`
  align-self: center;
  margin-top: ${RFValue(52, 640)}px;
  border-radius: ${RFValue(88, 640)}px;
  height: ${RFValue(156, 640)}px;
  width: ${RFValue(156, 640)}px;
`;
