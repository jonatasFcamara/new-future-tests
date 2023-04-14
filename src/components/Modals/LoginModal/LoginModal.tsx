import React, { useState } from 'react';
import { Modal, Platform, TouchableWithoutFeedback } from 'react-native';
import { Button } from '../../Button';
import { Text } from '../../Text';
import { Overlay, ModalBody, Header, Form, Input } from './styles';
import { TModal } from './TLoginModal';

export function LoginModal({ isVisible, onClose }: TModal) {
  const [email, setEmail] = useState('');

  return (
    <Modal
      transparent
      visible={isVisible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <Overlay shadow="transparent" behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
          <ModalBody>
            <Header>
              <Text weight="600">Acessar a plataforma</Text>
            </Header>
            <Form>
              <Input
                keyboardType="number-pad"
                placeholder="Email"
                placeholderTextColor="#666"
                onChangeText={setEmail}
              />
              <Button onPress={onClose} disabled={email.length === 0}>
              Avançar
              </Button>
            </Form>
          </ModalBody>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
