import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const PropertyContainer = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  width: ${Dimensions.get('window').width * 0.35}px;
`;
