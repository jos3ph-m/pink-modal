// Styles
import { useState } from 'react';
import GlobalStyles from './components/GlobalStyles';
import styled from 'styled-components';
import { Modal } from './components/Modal';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  font-family: 'Space Grotesk', sans-serif;
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 6px;
  box-shadow: 1px 1px 20px 10px rgba(194, 157, 0, 0.3);
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #c29d00;
  color: #fcfcfc;
  font-size: 2rem;
`;

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <Button onClick={openModal}>Pink Modal</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Container>
    </div>
  );
}

export default App;
