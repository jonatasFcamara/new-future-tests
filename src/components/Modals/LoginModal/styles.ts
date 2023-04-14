import styled from 'styled-components/native';
import { TOverlay } from './TLoginModal';

export const Overlay = styled.KeyboardAvoidingView<TOverlay>`
  flex: 1;
  align-items: stretch;
  justify-content: flex-end;
  background: ${({ shadow }) => shadow || 'rgba(0, 0, 0, 0.6)'};
`;

export const ModalBody = styled.View`
  background: #fafafa;
  border-radius: 8px 8px 0 0r;
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  margin-top: 32px;
`;

export const Input = styled.TextInput`
  background: #fff;
  border: 1px solid rgba(204, 204, 204, 0.5);
  padding: 16px;
  margin-bottom: 24px;
`;
