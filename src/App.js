// Styles
import GlobalStyles from './components/GlobalStyles';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background-color: #c29d00;
  color: #fcfcfc;
  font-size: 2rem;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <Button>Pink Modal</Button>
      </Container>
    </div>
  );
}

export default App;
