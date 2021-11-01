import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const HomeContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${RFValue(51, 640)}px;
`;
export const HomeLogoContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
export const HomeAppImage = styled.Image`
  width: ${RFValue(130, 640)}px;
  height: ${RFValue(106, 640)}px;
  margin-bottom: ${RFValue(16, 640)}px;
`;
export const HomeAppTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15, 640)}px;
  line-height: ${RFValue(22, 640)}px;
  color: ${({ theme }) => theme.colors.on_background};
`;
export const HomeAppTitleBlue = styled(HomeAppTitle)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
export const HomeWelcomeText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(22, 640)}px;
  line-height: ${RFValue(36, 640)}px;
  color: ${({ theme }) => theme.colors.on_background};

  margin: ${RFValue(54, 640)}px 0px;
`;
export const HomeWikiButton = styled.TouchableOpacity`
  width: ${RFValue(204, 640)}px;
  height: ${RFValue(50, 640)}px;
  background-color: ${({ theme }) => theme.colors.secondary_dark};
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  elevation: 5;

  align-items: center;
  justify-content: center;
`;
export const HomeWikiText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  line-height: ${RFValue(18, 640)}px;
  font-size: ${RFValue(10.5, 640)}px;
  color: ${({ theme }) => theme.colors.background};
  margin: ${RFValue(16, 640)}px 0px;
`;
export const HomeLinksContainer = styled.View`
  margin-top: ${RFValue(16, 640)}px;
`;
export const HomePhraseContainer = styled.View`
  flex-direction: row;
  margin: ${RFValue(4, 640)}px 0px;
`;
export const HomeRegularText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10.5, 640)}px;
  line-height: ${RFValue(18, 640)}px;
  color: ${({ theme }) => theme.colors.on_background};
`;
export const HomeLogLink = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(10.5, 640)}px;
  line-height: ${RFValue(18, 640)}px;
  color: ${({ theme }) => theme.colors.on_background};
`;
