import { useState } from 'react';
import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer
} from './styles';

import { Header } from '../Header';
import { Categories } from '../Categories';
import { Menu } from '../Menu';
import { Button } from '../Button';
import { TableModal } from '../TableModal';

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');

  function handleTableModalVisible() {
    setIsTableModalVisible(!isTableModalVisible);
  }

  function handleSaveTable(table: string) {
    setSelectedTable(table);
    handleTableModalVisible();
  }

  return (
    <>
      <TableModal
        visible={isTableModalVisible}
        onClose={handleTableModalVisible}
        onSave={handleSaveTable}
      />

      <Container>
        <Header />
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button onPress={handleTableModalVisible}>
              Novo Pedido
            </Button>
          )}
        </FooterContainer>
      </Footer>
    </>
  );
}
