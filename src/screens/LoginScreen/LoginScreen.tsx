import React, { useState } from 'react';
import {
  Container,
  HeaderContent,
  Footer,
  FooterContainer
} from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { LoginModal } from '../../components/Modals';

export function LoginScreen() {
  const [LoginModalVisible, setLoginModalVisible] = useState(false);

  function handleLoginModalVisible() {
    setLoginModalVisible(!LoginModalVisible);
  }

  return (
    <>
      <LoginModal
        isVisible={LoginModalVisible}
        onClose={handleLoginModalVisible}
      />

      <Container>
        <HeaderContent>
          <Header />
        </HeaderContent>

        <Footer>
          <FooterContainer>
            <Button onPress={handleLoginModalVisible}>
              Entrar
            </Button>
          </FooterContainer>
        </Footer>
      </Container>
    </>
  );
}
