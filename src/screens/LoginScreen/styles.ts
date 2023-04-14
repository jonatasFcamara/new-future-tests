import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background: #2e3952;
`;

export const HeaderContent = styled.SafeAreaView`
  align-items: center;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px`: '0'};
`;

export const Footer = styled.View`
  min-height: 110px;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView`

`;
